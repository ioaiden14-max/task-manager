import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setToken, setUsername }) {
  const API = "https://task-manager-bibbles-backenddd.onrender.com";

  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!usernameInput || !password) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${API}/login`, {
        username: usernameInput,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username);

      setToken(response.data.token);
      setUsername(response.data.username);

      navigate("/list");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
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
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;