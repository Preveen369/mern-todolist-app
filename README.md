# 📋 MERN-TodoList-App – A Full-Stack Todo Application

![Platform](https://img.shields.io/badge/Platform-Web-blue.svg)
![Frontend](https://img.shields.io/badge/Frontend-React-orange.svg)
![Backend](https://img.shields.io/badge/Backend-Node.js-red.svg)
![Backend](https://img.shields.io/badge/Backend-Express.js-aqua.svg)
![Database](https://img.shields.io/badge/Database-MongoDB-emerald.svg)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow.svg)
![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)

**MERN-TodoList-App** is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to manage their tasks by adding, updating, and deleting todos, with data persistently stored in a MongoDB database. The frontend is created using Create React App, providing a responsive and interactive user interface, while the backend handles API requests and database operations.

---

## 🚀 Features

### 📋 Task Management
- Add, update, and delete tasks seamlessly.  
- View a list of all tasks with their statuses.

### 🌐 Full-Stack Integration
- Frontend communicates with the backend via RESTful APIs.  
- Backend handles CRUD operations with MongoDB.

### 📱 Responsive Design
- Adapts to different screen sizes for a consistent experience.  
- Ensures usability on both desktop and mobile devices.

### 💾 Persistent Storage
- Tasks are stored in MongoDB for data persistence.  
- Ensures tasks are retained across sessions.

---

## 🛠️ Tech Stack

- **Frontend**: React, JavaScript, CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  

---

## 📂 Project Structure

```
mern-todolist-app/

    ├── backend/
    │   ├── models/             # MongoDB schema models
    │   ├── routes/             # API routes for todo operations
    │   └── server.js           # Main backend server file
    ├── frontend/
    │   ├── public/             # Static assets for the React app
    │   ├── src/
    │   │   ├── components/     # React components (TodoForm, TodoList)
    │   │   ├── App.css         # Main CSS styles for the app
    │   │   ├── App.js          # Main React app component
    │   │   └── index.js        # React entry point
    │   ├── package.json        # Frontend dependencies
    │   └── package-lock.json   # Frontend dependency lock file
    ├── .gitignore              # Git ignore file
    ├── package.json            # Backend dependencies
    ├── package-lock.json       # Backend dependency lock file
    ├── LICENSE                 # MIT License file
    └── README.md               # Project documentation
```

---

## 🧪 Installation & Setup

### 📋 Prerequisites
- Node.js (v14 or higher)  
- npm or yarn  
- MongoDB (local installation or MongoDB Atlas)

### 🧑‍💻 Steps to run
1. **Clone the repository**
   ```bash
   git clone https://github.com/Preveen369/mern-todolist-app.git
   cd mern-todolist-app
   ```

2. **Set up the backend**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and add your MongoDB connection string:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```
   - Start the backend server locally (optional, if not using Render):
     ```bash
     npm start
     ```
     The backend server will run on `http://localhost:5000`.

3. **Set up the frontend**
   - Open a new terminal and navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```

4. **Connect Frontend to Backend**
   - In the `frontend` directory, open the `package.json` file and add the following proxy setting to connect to your backend server:
     ```json
     "proxy": "https://your-backend-url"
     ```
   - Replace `https://your-backend-url` with the actual URL of your deployed backend (e.g., on Render or another hosting platform). This ensures that API requests from the frontend are proxied to the backend server.

5. **Start the frontend development server**
   - In the `frontend` directory, start the development server:
     ```bash
     npm start
     ```
     🌐 Open your browser and navigate to `http://localhost:3000`.

6. **Backend Deployment on Render**
   - The backend is deployed on the Render platform for scalable hosting.  
   - To deploy your own instance on Render:
     - Push the `backend` directory to a GitHub repository.
     - Create a new Web Service on Render and connect your repository.
     - Set the environment variable `MONGODB_URI` in Render's dashboard.
     - Deploy the service, and Render will provide a live URL for the backend API.

7. **Build for Production (Optional)**
   - In the `frontend` directory, build the React app:
     ```bash
     npm run build
     ```
     The built files will be in the `frontend/build` directory.

---

## 🤝 Contributing

Pull requests are welcome! Feel free to fork the repository and suggest improvements.

Steps to contribute:

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature-name

# 3. Commit your changes
git commit -m "Add feature description"

# 4. Push to GitHub
git push origin feature-name

# 5. Open a Pull Request
```

---

## 📧 Contact

For queries or suggestions:

- 📩 Email: spreveen123@gmail.com  
- 🌐 LinkedIn: www.linkedin.com/in/preveen-s-17250529b/

---

## 🌟 Show Your Support

If you like this project, please consider giving it a ⭐ on GitHub!
