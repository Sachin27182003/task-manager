# 🚀 Full-Stack Task Manager

A modern **full-stack Task Manager application** built using:

* ⚙️ **Backend:** Node.js + Express
* 💻 **Frontend:** React (Vite) + Tailwind CSS

This app allows users to **create, update, manage, and delete tasks** seamlessly.

---

## 📁 Project Structure

```text
task-manager/
├── task-manager-backend/    # Node.js & Express API
└── task-manager-frontend/   # React (Vite) + Tailwind CSS
```

---

## 📦 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sachin27182003/task-manager.git
cd task-manager
```

---

# ⚙️ Backend Setup (Node.js + Express)

### 📍 Step 1: Navigate to Backend

```bash
cd task-manager-backend
```

### 📍 Step 2: Install Dependencies

```bash
npm install
```

### 📍 Step 3: Configure Environment Variables

Create a `.env` file in the backend root:

```env
PORT=3000
```

### 📍 Step 4: Run the Server

```bash
npm run dev
```

✅ Backend will run at:
👉 http://localhost:3000

---

## 🔗 API Endpoints

| Method | Endpoint   | Description                |
| ------ | ---------- | -------------------------- |
| GET    | /tasks     | Fetch all tasks            |
| POST   | /tasks     | Create a new task          |
| PATCH  | /tasks/:id | Update task details/status |
| DELETE | /tasks/:id | Delete a task              |

---

# 💻 Frontend Setup (React + Vite + Tailwind)

### 📍 Step 1: Navigate to Frontend

Open a new terminal:

```bash
cd task-manager-frontend
```

### 📍 Step 2: Install Dependencies

```bash
npm install
```

### 📍 Step 3: Configure Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000
```

⚠️ Make sure this matches your backend URL exactly.

---

### 📍 Step 4: Start Development Server

```bash
npm run dev
```

✅ Frontend will run at:
👉 http://localhost:5173

---

## ✨ Features

* ✅ Create new tasks
* 📝 Update task details
* 🔄 Mark tasks as complete/incomplete
* ❌ Delete tasks
* ⚡ Fast and responsive UI with Tailwind

---

## 🛠️ Tech Stack

| Layer    | Technology              |
| -------- | ----------------------- |
| Frontend | React + Vite + Tailwind |
| Backend  | Node.js + Express       |
| API      | REST API                |

---

## 📌 Notes

* Ensure both frontend and backend servers are running simultaneously
* Double-check `.env` configurations if API calls fail
* Use tools like Postman or Thunder Client to test APIs

---

## 📝 Assumptions & Trade-Offs

While building this Full-Stack Task Manager, several architectural decisions and trade-offs were made to balance functionality, maintainability, and assignment constraints:

### 1. In-Memory Database (Backend)
* **Assumption:** The primary goal of this assignment is to demonstrate full-stack API integration and frontend UI/UX, rather than database administration.
* **Trade-off:** I utilized an in-memory array (`let tasks = []`) to store data. This allows for zero-configuration setup for reviewers. However, the obvious trade-off is data volatility—all tasks are lost when the Node.js server restarts. In a production environment, this would be replaced with a persistent database like PostgreSQL or MongoDB.

### 2. State Management via Custom Hooks (Frontend)
* **Decision:** I used React's native `useState` and encapsulated all API logic inside a custom `useTasks` hook rather than bringing in a heavy state management library like Redux or Zustand. 
* **Trade-off:** This avoids over-engineering and keeps the bundle size small. It is the perfect architectural fit for an app of this scale. If the application were to grow significantly (e.g., adding user authentication, collaborative workspaces), migrating to a global state manager would be necessary to prevent prop-drilling.

### 3. Component Architecture & Routing
* **Decision:** Instead of relying on a single complex page with modals for editing and viewing, I implemented `react-router-dom` to separate concerns into distinct pages (Home, Add Task, Edit Task, Task Details). 
* **Trade-off:** This requires slightly more boilerplate but drastically improves the user experience. It allows users to bookmark specific tasks, use the browser's native "Back" button, and keeps individual React components small and easy to test.

### 4. Styling Strategy
* **Decision:** Tailwind CSS was chosen for styling over standard CSS modules or styled-components.
* **Trade-off:** Tailwind allows for rapid prototyping and ensures a highly consistent, responsive design system without needing to context-switch between files. The trade-off is that the JSX markup becomes heavier with utility classes, though this is mitigated by keeping components small and focused.

### 5. Error Handling & Loading States
* **Assumption:** Network requests can and will fail.
* **Decision:** The frontend is equipped with explicit `loading` and `error` states. Buttons are disabled during active API calls to prevent duplicate submissions, and the user is provided with clear visual feedback if the backend is unreachable.

## 👨‍💻 Author

**Sachin**
B.Tech 3rd year Student | Full-Stack Developer

---

🙏 Thank You

Thank you for checking out this project!
If you found it helpful or interesting, consider giving it a ⭐ on GitHub.

Your support means a lot and keeps the motivation going 🚀
