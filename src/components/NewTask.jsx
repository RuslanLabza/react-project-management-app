import Button from "./Button";
import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  }

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        value={task}
        onChange={handleChange}
        className="flex-1 p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Add a task"
      />
      <Button primary type="button" onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
}
