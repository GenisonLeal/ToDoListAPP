import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    if (!title.trim()) {
      alert('Por favor, insira um título para a tarefa.');
      return;
    }
    // Chama a função passada por props para adicionar a tarefa
    onAddTask({ title, description });
    // Limpa os campos do formulário
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descrição (opcional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="3"
      ></textarea>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default TaskForm;
