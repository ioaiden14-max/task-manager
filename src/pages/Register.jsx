import { useState } from "react";
import axios from "axios";

function Register() {
  const API = "https://task-manager-bibbles-backenddd.onrender.com";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

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
      alert("Registration failed");
    } finally {
      setLoading(false);
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

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;