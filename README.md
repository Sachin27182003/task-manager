# Full-Stack Task Manager

A complete, full-stack Task Manager application built with a Node.js/Express backend and a React (Vite) + Tailwind CSS frontend.

---

## 📁 Project Structure

Ensure your project folders are structured like this:
```text
task-manager/
├── task-manager-backend/    # Node.js & Express API
└── task-manager-frontend/   # React & Vite UI

## ⚙️ Part 1: Backend Setup (Node.js + Express)
1. Open terminal and navigate to the backend folder:
   cd task-manager-backend
2. Install dependencies:
   npm install express cors dotenv uuid
3. Start the server (runs on http://localhost:3000):
   npm run dev 

## 💻 Part 2: Frontend Setup (React + Vite + Tailwind)
1. Open a new terminal and navigate to the frontend folder:
   cd task-manager-frontend
2. Install dependencies:
   npm install
   npm install react-router-dom
   npm install -D tailwindcss @tailwindcss/vite
3. Start the Vite development server:
   npm run dev

## 🚀 API Endpoints Reference
| Method | Endpoint      | Description                  |
|--------|---------------|------------------------------|
| GET    | `/tasks`      | Return all tasks.            |
| POST   | `/tasks`      | Create a new task.           |
| PATCH  | `/tasks/:id`  | Update a task status/details.|
| DELETE | `/tasks/:id`  | Delete a task.               |
