import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleStatus, onDelete }) {
  if (tasks.length === 0) {
    return <p className="message">Nenhuma tarefa encontrada. Adicione uma nova tarefa!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
