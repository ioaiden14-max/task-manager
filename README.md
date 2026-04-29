# Task Manager Web Application

## Student Name
Ndiye Ntusa

---

## Project Description
This project is a Task Manager web application built using React.  
It allows users to create, view, update, and delete tasks.

The application demonstrates component-based design, routing, state management, and responsive UI.

---

## Technologies Used
- React (Vite)
- React Router
- JavaScript
- CSS

---

## Features
- View a list of tasks
- Add new tasks using a form
- View task details
- Mark tasks as complete or incomplete
- Delete tasks
- Responsive design for different screen sizes

---

## Project Structure

Frontend (React):
src/
├── components/
│   ├── Navbar.jsx
│   ├── Card.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── List.jsx
│   ├── Details.jsx
│   ├── AddTask.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│
├── App.jsx
├── main.jsx

Backend (Node.js + Express):
task-manager-backend/
├── server.js
├── db.js
├── package.json
├── .env

## Backend Setup

1. Navigate to backend folder:
cd task-manager-backend

2. Install dependencies:
npm install

3. Create a `.env` file:
PORT=5000
JWT_SECRET=mysecretkey

4. Start backend:
node server.js

---

## Database Setup

Database name: TaskManagerDB

Tables:
- Users
- Tasks

The Users table stores registered users with hashed passwords.
The Tasks table stores task information and links tasks to users using userId.

---

## Authentication

The app includes:
- User registration
- User login
- JWT token authentication
- Protected task routes
