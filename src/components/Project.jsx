import React from 'react';

export default function Project({ className, title, description, dueDate, tasks }) {
    return (
        <section className={className}>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">{title}</h1>
            <p className="text-gray-600 mb-4">{description}</p>
            <p className="text-sm text-gray-500 mb-5">Due: {new Date(dueDate).toLocaleDateString()}</p>
            <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Tasks</h2>
                <ul className="space-y-2">
                    {tasks.map((task) => (
                        <li key={task.id} className="text-gray-600 pb-2 border-b border-gray-200 last:border-b-0">
                            {task.title}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}