import React from "react";
import Button from "./Button";
import Tasks from "./Tasks";

export default function Project({
  className,
  title,
  description,
  dueDate,
  tasks,
  onDelete,
  onAddTask,
  onDeleteTask,
}) {
  return (
    <section className={className}>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <Button onClick={onDelete} danger aria-label="Delete project">
          Delete
        </Button>
      </div>
      <p className="text-sm text-gray-500 mb-5">
        Due: {new Date(dueDate).toLocaleDateString()}
      </p>
      <p className="text-gray-600 mb-4">{description}</p>
      <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </section>
  );
}
