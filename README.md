# DevSync Backend

DevSync is a task manager application built using Node.js, Express, and MongoDB. The backend handles authentication, task CRUD operations, and filtering capabilities.

---

## Features
- User Authentication with JWT
- CRUD Operations for Tasks (Create, Read, Update, Delete)
- Task Filtering by Pending, Completed, and Categories
- Reminder & Due Date management
- Modular and organized code structure

## Tech Stack
- Node.js with Express
- MongoDB for database
- Mongoose for data modeling
- JWT for secure authentication
- dotenv for environment variables

## Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/DennisIrias85/DevSync.git
   cd DevSync

2. Install dependencies
npm install

3. Create a .env file in the root folder with the following variables:

PORT=5000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret

4. Seed initial data (optional for testing):
npm run seed

5. Start the development server:
npm run dev

## API Endpoints

**Authentication**
- POST /auth/register - Register a new user
- POST /auth/login - Log in and receive a token

**Tasks**
- GET /tasks - Fetch all tasks for authenticated user
- POST /tasks - Create a new task
- PUT /tasks/:id - Update an existing task
- DELETE /tasks/:id - Delete a task

**Filtering**
- GET /tasks?filter=pending - Show only pending tasks
- GET /tasks?filter=completed - Show only completed tasks
- GET /tasks/categories - Show tasks grouped by categories

## Project Structure

|-- controllers
|-- middleware
|-- models
|-- routes
|-- utils
|-- .env
|-- server.js

## Usage
1. After registering/logging in, use the provided JWT token in the headers for authenticated routes.
2. The task creation endpoint requires title and dueDate as mandatory fields.
3. Tasks can include optional fields like category, reminder, and status.


## Deployment

To build for production:
npm run build

For deployment, use services like Heroku, Vercel, or AWS.

**License
This project is licensed under the [MIT License](./LICENSE).

