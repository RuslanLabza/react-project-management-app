import NewTask from "./NewTask";
import Button from "./Button";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Tasks</h3>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="text-sm text-gray-500 mb-2">
          This project has no tasks yet.
        </p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="text-gray-600 pb-2 border-b border-gray-200 last:border-b-0"
            >
              {task.title}
              <Button
                onClick={() => onDeleteTask(task.id)}
                danger
                aria-label="Delete task"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
