import { Link, useNavigate } from "react-router-dom";

function Navbar({ token, setToken, username, setUsername }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    setToken(null);
    setUsername(null);

    navigate("/login");
  };

  return (
    <nav className="navbar">
      {!token ? (
        <div>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </div>
      ) : (
        <>
          <div>
            <Link to="/add">Add Task</Link> |{" "}
            <Link to="/list">List</Link> |{" "}
            <button onClick={handleLogout}>Logout</button>
          </div>

          <div className="username-display">👤 {username}</div>
        </>
      )}
    </nav>
  );
}

export default Navbar;