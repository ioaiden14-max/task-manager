import TaskCard from "../components/TaskCard";

function List({ tasks, deleteTask, updateTask }) {
  return (
    <div className="container">
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))
      )}
    </div>
  );
}

export default List;