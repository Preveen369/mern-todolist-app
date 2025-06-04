# 📋 MERN-TodoList-App Backend

![Backend](https://img.shields.io/badge/Backend-Node.js-red.svg)
![Backend](https://img.shields.io/badge/Backend-Express.js-aqua.svg)
![Database](https://img.shields.io/badge/Database-MongoDB-emerald.svg)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow.svg)
![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)

This is the backend documentation for the **MERN-TodoList-App**, built with Node.js, Express.js, and MongoDB. The backend handles RESTful API requests for task management and stores data persistently in a MongoDB database.

🔗 **Related Documentation**: [Main Project README](../README.md) | [Frontend README](../frontend/README.md)

## 🚀 Features

- **Full-Stack Integration**: Handles CRUD operations for tasks via RESTful APIs.
- **Persistent Storage**: Stores tasks in MongoDB for data persistence across sessions.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## 📂 Backend Structure

```
backend/
├── models/                 # MongoDB schema models
├── routes/                 # API routes for todo operations
├── server.js               # Main backend server file
├── package.json            # Backend dependencies
└── package-lock.json       # Backend dependency lock file
```

## 🧪 Installation & Setup

### 📋 Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas)
- Thunderclient API (for API endpoints testing)

### 🧑‍💻 Steps to run
1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the `backend` directory and add your MongoDB connection string:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Start the backend server locally**
   ```bash
   npm start
   ```
   The backend server will run on `http://localhost:5000`.

5. **Backend Deployment on Render**
   - To deploy the backend on Render:
     - Push the `backend` directory to a GitHub repository.
     - Create a new Web Service on Render and connect your repository.
     - Set the environment variable `MONGODB_URI` in Render's dashboard.
     - Deploy the service, and Render will provide a live URL for the backend API.

## 🤝 Contributing

Contributions to the backend are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to GitHub:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

For more details, see the [Main Project README](../README.md).

## 📧 Contact

For queries or suggestions:
- 📩 Email: spreveen123@gmail.com
- 🌐 LinkedIn: www.linkedin.com/in/preveen-s-17250529b/
