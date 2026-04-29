import { useState } from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setMessage("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      await addTask({
        title,
        description,
        completed: false,
      });

      setMessage("Task added successfully");

      setTitle("");
      setDescription("");

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Add Task</h2>

      {message && (
        <p
          style={{
            color: message.includes("success") ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Adding task..." : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default AddTask;