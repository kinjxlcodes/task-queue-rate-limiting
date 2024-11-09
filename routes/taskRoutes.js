// taskRoutes.js
const express = require('express');
const router = express.Router();
const { handleTaskRequest } = require('../controllers/taskController');

router.post('/task', handleTaskRequest);

module.exports = router;
