import { useParams } from "react-router-dom";

function Details({ tasks }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="container">
        <h2>Task not found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Task Details</h2>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.completed ? "Completed" : "Not Completed"}</p>
      </div>
    </div>
  );
}

export default Details;