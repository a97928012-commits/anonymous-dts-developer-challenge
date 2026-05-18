# HMCTS Task Management System

A full-stack task management application built for HMCTS caseworkers to efficiently create, track, update, and manage their tasks.

## 🔗 Live Demo

[View the live demo here](https://anonymous-dts-developer-challenge.vercel.app/)

---

## 🛠 Tech Stack

**Frontend**
- [React](https://react.dev/) (via Vite)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

**Backend**
- [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [dotenv](https://github.com/motdotla/dotenv)
- [CORS](https://github.com/expressjs/cors)

---

## 🚀 Running Locally

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- A PostgreSQL database (local or hosted, e.g. [Supabase](https://supabase.com/), [Neon](https://neon.tech/), or [ElephantSQL](https://www.elephantsql.com/))

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
DB_URL=your_postgresql_connection_string_here
```

> **Example:** `DB_URL=postgresql://user:password@localhost:5432/tasks_db`

Start the backend server:

```bash
npm start
```

API for the demo is hosted on Render therefore it'll take 30 seconds-1 minute to run at the start or `http://localhost:3000` if running locally

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:3000/
```

Start the frontend development server:

```bash
npm run dev
```

The app will be available locally at `http://localhost:5173`.

---

## 📖 API Documentation

Base URL: `http://localhost:3000`

All request and response bodies use JSON.

---

### Tasks

#### `POST /tasks` — Create a Task

Creates a new task.

**Request Body**

| Field         | Type     | Required | Description                                                              |
|---------------|----------|----------|--------------------------------------------------------------------------|
| `title`       | `string` | ✅ Yes   | Title of the task                                                        |
| `description` | `string` | ❌ No    | Optional description of the task                                         |
| `status`      | `string` | ✅ Yes   | Task status (`Pending`, `In Progress`, `Completed`)                      |
| `due_date`    | `timestamp` | ✅ Yes   | Due date/time in ISO 8601 format (e.g. `2025-06-01T12:00:00Z`)        |

---

#### `GET /tasks` — Get All Tasks

Returns a list of all tasks.

---

#### `GET /tasks/:id` — Get a Task by ID

Returns a single task by its ID.

**URL Parameter**

| Parameter | Type      | Description       |
|-----------|-----------|-------------------|
| `id`      | `integer` | The task's ID     |

---

#### `PATCH /tasks/:id` — Update Task Status

Updates the status of an existing task.

**URL Parameter**

| Parameter | Type      | Description   |
|-----------|-----------|---------------|
| `id`      | `integer` | The task's ID |

**Request Body**

| Field    | Type     | Required | Description                                          |
|----------|----------|----------|------------------------------------------------------|
| `status` | `string` | ✅ Yes   | New status (`pending`, `in_progress`, `completed`)   |

---

#### `/tasks/:id` — Delete a Task

Deletes a task by its ID.

**URL Parameter**

| Parameter | Type      | Description   |
|-----------|-----------|---------------|
| `id`      | `integer` | The task's ID |

**Response** `200 OK`
```json
{ "message": "Task deleted successfully" }
```

**Error Response** `404 Not Found`
```json
{ "error": "Task not found" }
```

---

## ✅ Features

- Create tasks with title, optional description, status, and due date
- View all tasks in a clean, responsive interface
- Update the status of a task
- Delete tasks
- Input validation and error handling throughout
- Unit tests for backend API endpoints

---


## 📝 Notes

- Ensure your PostgreSQL database is running and accessible before starting the backend.
- The `.env` files are excluded from version control. Never commit them.
- CORS is configured on the backend to allow requests from the frontend dev server.
