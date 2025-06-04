# 📋 MERN-TodoList-App Frontend

![Frontend](https://img.shields.io/badge/Frontend-React-orange.svg)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow.svg)
![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)

This is the frontend documentation for the **MERN-TodoList-App**, built with React using Create React App. The frontend provides a responsive and interactive user interface for managing tasks, communicating with the backend via RESTful APIs.

🔗 **Related Documentation**: [Main Project README](../README.md) | [Backend README](../backend/README.md)

## 🚀 Features

- **Task Management**: Add, update, and delete tasks seamlessly through an intuitive UI.
- **Responsive Design**: Adapts to different screen sizes for a consistent experience on desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend**: React, JavaScript, CSS

## 📂 Frontend Structure

```
frontend/
   ├── public/                 # Static assets for the React app
   ├── src/
   │   ├── components/         # React components (TodoForm, TodoList)
   │   ├── App.css             # Main CSS styles for the app
   │   ├── App.js              # Main React app component
   │   ├── index.js            # React entry point
   ├── package.json            # Frontend dependencies
   └── package-lock.json       # Frontend dependency lock file
```

## 🧪 Installation & Setup

### 📋 Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend server running (see [Backend README](../backend/README.md))
- Thunderclient API (for API endpoints testing)

### 🧑‍💻 Steps to run
1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Connect Frontend to Backend**
   - Open the `package.json` file in the `frontend` directory and add the following proxy setting to connect to your backend server:
     ```json
     "proxy": "https://your-backend-url"
     ```
   - Replace `https://your-backend-url` with the actual URL of your deployed backend (e.g., on Render or `http://localhost:5000` for local development).

4. **Start the frontend development server**
   ```bash
   npm start
   ```
   🌐 Open your browser and navigate to `http://localhost:3000`.

5. **Build for Production (Optional)**
   - Build the React app for production:
     ```bash
     npm run build
     ```
     The built files will be in the `frontend/build` directory.

## 🤝 Contributing

Contributions to the frontend are welcome! To contribute:
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
