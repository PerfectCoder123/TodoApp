# ✅ TodoApp
A simple, clean, and fully functional TODO application demonstrating CRUD operations with a modern client–server architecture.

---

## 📌 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Folder Structure](#folder-structure)
- [Setup & Installation](#setup--installation)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## 🧾 Overview
**TodoApp** allows users to:
- Create tasks
- View tasks
- Update tasks
- Delete tasks

This application is a great starter template for beginners wanting to explore full-stack concepts.

---

## ✨ Features
- Fully functional CRUD operations
- Real-time UI updates
- Clean component structure
- Easy-to-extend backend
- Beginner-friendly codebase

---

## 🧠 Tech Stack
### Frontend
- HTML, CSS, JavaScript

### Backend
- C# / ASP.NET Web API 

---
## 🖼️ Screenshots

### ✅ Home Screen
![Home Screen](./Img/Screenshot%20from%202024-12-03%2012-58-01.png)

### ➕ Add Task
![Add Task](./Img/Screenshot%20from%202024-12-03%2012-59-27.png)

### ✏️ Edit Task
![Edit Task](./Img/Screenshot%20from%202024-12-03%2012-59-35.png)

### ❌ Delete Task
![Delete Task](./Img/Screenshot%20from%202024-12-03%2013-00-18.png)

---

## 📁 Folder Structure
```

TodoApp/
├─ TodoBackend/        # Backend API logic
├─ TodoFrontend/       # UI and rendering logic
├─ images/             # App screenshots
└─ README.md

````

---

## ⚙️ Setup & Installation

### ✅ Prerequisites
Make sure you have installed:

- Git
- Node.js (v14+ recommended)
- .NET SDK
- npm or yarn

---

### 📥 Clone the repository
```bash
git clone https://github.com/PerfectCoder123/TodoApp.git
cd TodoApp
````

---

### 📦 Install Dependencies

#### Backend

```bash
cd TodoBackend
dotnet restore
```

#### Frontend

```bash
cd ../TodoFrontend
npm install
```

---

## 🚀 Running the App

Start the **backend**:

```bash
cd TodoBackend
dotnet run
```

Start the **frontend**:

```bash
cd ../TodoFrontend
npm start
```

Visit:

```
http://localhost:3000/
```

---

## 🔌 API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | /api/tasks      | Get all tasks   |
| GET    | /api/tasks/{id} | Get task by ID  |
| POST   | /api/tasks      | Create new task |
| PUT    | /api/tasks/{id} | Update task     |
| DELETE | /api/tasks/{id} | Delete task     |

---

## 🧩 Future Improvements

* User authentication system
* Task categories & tags
* Due dates and reminders
* Dark / Light theme toggle
* Drag & drop sorting

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create a feature branch:

   ```bash
   git checkout -b feature/xyz
   ```
3. Commit changes
4. Push and open a Pull Request

---

## 📬 Contact

Created by **[@PerfectCoder123](https://github.com/PerfectCoder123)**
For any suggestions, feedback, feature requests — please open an issue.

---

## 📄 License

This project is licensed under the **MIT License**.

---
