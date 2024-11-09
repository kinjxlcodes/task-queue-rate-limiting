// queueWorker.js
const redis = require('../config/redisConfig');
const { task } = require('../models/rateLimiter');

setInterval(async () => {
  const users = await redis.keys('user:*:queue');
  for (const userKey of users) {
    const user_id = userKey.split(':')[1];
    const taskData = await redis.lpop(userKey);

    if (taskData) {
      const taskObj = JSON.parse(taskData);
      await task(taskObj.user_id);
    }
  }
}, 1000); // Check queue every second
