import { useState } from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      await addTask({
        title,
        description,
        completed: false,
      });

      setMessage("Task added successfully"); // ✅ success message

      setTitle("");
      setDescription("");

      // Optional: auto-hide message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Failed to add task");
    }
  };

  return (
    <div className="container">
      <h2>Add Task</h2>

      {/* MESSAGE DISPLAY */}
      {message && (
        <p
          style={{
            color: message.includes("successfully") ? "green" : "red",
            fontWeight: "bold",
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

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;