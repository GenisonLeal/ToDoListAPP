import React from 'react';

function TaskItem({ task, onToggleStatus, onDelete }) {
  // Define a classe CSS com base no status da tarefa
  const itemClassName = `task-item ${task.status === 'concluida' ? 'completed' : ''}`;

  return (
    <li className={itemClassName}>
      <div className="task-item-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
      </div>
      <div className="task-item-actions">
        <button
          className="toggle-btn"
          onClick={() => onToggleStatus(task.id, task.status)}
        >
          {task.status === 'pendente' ? 'Concluir' : 'Reabrir'}
        </button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Excluir
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
