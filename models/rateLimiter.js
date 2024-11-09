// rateLimiter.js
const redis = require('../config/redisConfig');

async function rateLimitCheck(user_id) {
  const userKey = `user:${user_id}:tasks`;
  const taskCount = await redis.get(userKey) || 0;

  if (taskCount < 20) {
    await redis.multi()
      .incr(userKey)
      .expire(userKey, 60) // 1 minute expiration
      .exec();
    return true;
  }
  return false;
}

async function addToQueue(user_id, taskData) {
  const queueKey = `user:${user_id}:queue`;
  await redis.rpush(queueKey, JSON.stringify(taskData));
}

async function task(user_id) {
  const timestamp = Date.now();
  const logEntry = `${user_id}-task completed at-${timestamp}\n`;
  
  const fs = require('fs');
  fs.appendFileSync('./logs/task_logs.txt', logEntry);
}

module.exports = { rateLimitCheck, addToQueue, task };
