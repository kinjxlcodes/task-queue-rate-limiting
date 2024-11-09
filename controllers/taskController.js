// taskController.js
const redis = require('../config/redisConfig');
const { rateLimitCheck, addToQueue, task } = require('../models/rateLimiter');

async function handleTaskRequest(req, res) {
  const { user_id } = req.body;
  const canProceed = await rateLimitCheck(user_id);

  if (canProceed) {
    await task(user_id);
    res.status(200).json({ message: 'Task processed' });
  } else {
    await addToQueue(user_id, req.body);
    res.status(429).json({ message: 'Rate limit exceeded. Task queued.' });
  }
}

module.exports = { handleTaskRequest };
