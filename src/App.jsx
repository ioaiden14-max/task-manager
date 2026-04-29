import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import List from "./pages/List";
import AddTask from "./pages/AddTask";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const API = "https://task-manager-bibbles-backenddd.onrender.com";

  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [loading, setLoading] = useState(false);

  const getAuthHeaders = () => {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
  };

  const fetchTasks = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${API}/tasks`, getAuthHeaders());
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      setTasks([]);
      fetchTasks();
    } else {
      setTasks([]);
      setLoading(false);
    }
  }, [token]);

  const addTask = async (newTask) => {
    try {
      const response = await axios.post(
        `${API}/tasks`,
        newTask,
        getAuthHeaders()
      );

      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/tasks/${id}`, getAuthHeaders());
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error.response?.data || error.message);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(
        `${API}/tasks/${id}`,
        updatedTask,
        getAuthHeaders()
      );

      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
    } catch (error) {
      console.error("Error updating task:", error.response?.data || error.message);
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        token={token}
        setToken={setToken}
        username={username}
        setUsername={setUsername}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/login"
          element={<Login setToken={setToken} setUsername={setUsername} />}
        />

        <Route path="/register" element={<Register />} />

        <Route
          path="/list"
          element={
            loading ? (
              <div className="container">
                <h2>Loading tasks...</h2>
              </div>
            ) : (
              <List
                tasks={tasks}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )
          }
        />

        <Route path="/add" element={<AddTask addTask={addTask} />} />
        <Route path="/details/:id" element={<Details tasks={tasks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;