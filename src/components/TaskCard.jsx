import { Link } from "react-router-dom";

function TaskCard({ task, deleteTask, updateTask }) {
  const handleToggle = () => {
    updateTask(task.id, {
      ...task,
      completed: !task.completed,
    });
  };

  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.completed ? "Completed" : "Not Completed"}</p>

      <p>
        <Link to={`/details/${task.id}`} style={{ color: "#00e5ff" }}>
          View Details
        </Link>
      </p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handleToggle}>
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>

        <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;