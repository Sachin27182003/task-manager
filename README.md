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

## 👨‍💻 Author

**Sachin**
B.Tech 3rd year Student | Full-Stack Developer

---

🙏 Thank You

Thank you for checking out this project!
If you found it helpful or interesting, consider giving it a ⭐ on GitHub.

Your support means a lot and keeps the motivation going 🚀