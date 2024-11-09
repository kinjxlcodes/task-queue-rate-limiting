# Task Queue with Rate Limiting

This is a Node.js application that implements a rate-limited task processing system using Redis. It ensures that users can process tasks based on a rate limit of **1 task per second** and **20 tasks per minute**. Requests exceeding the rate limit are queued for later processing, and no requests are dropped.

The system uses a **Redis-based queue** to store tasks for users and ensures that tasks are processed in the correct order.

## Features
- **Rate Limiting**: 1 task per second and 20 tasks per minute per user.
- **Task Queueing**: Tasks exceeding the rate limit are queued for processing.
- **Logging**: Task completions are logged with the user ID and timestamp.
- **Clustering**: The app uses Node.js clustering to scale and distribute tasks across multiple workers.
- **Redis**: Redis is used for rate limiting and task queueing.
- **EJS Frontend**: Simple form-based frontend to submit tasks.

## Requirements
- Node.js
- Redis (installed and running)
- A Redis server URL (`localhost:6379` by default)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-queue-rate-limiting.git
   cd task-queue-rate-limiting
