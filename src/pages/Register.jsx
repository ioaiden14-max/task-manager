import { useState } from "react";
import axios from "axios";

function Register() {
  const API = "https://task-manager-bibbles-backenddd.onrender.com";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    try {
      await axios.post(`${API}/register`, {
        username,
        password,
      });

      alert("Registered successfully");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Register error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;