import React from 'react';

const TodoItem = ({ task, completeTask, removeTask }) => {
    return (
      <div className={`task-item ${task.completed ? 'completed' : ''}`}>
        <span>{task.text}</span>
        <div className="task-buttons">
          <button className="complete" onClick={() => completeTask(task.id)}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button className="delete" onClick={() => removeTask(task.id)}>
            Delete🗑️
          </button>
        </div>
      </div>
    );
  };
export default TodoItem;