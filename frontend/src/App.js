import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'; 

// URL base da nossa API.
const API_URL = 'http://localhost:3001/api/tasks';

function App() {
  // Estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState([]);
  // Estado para mensagens de erro
  const [error, setError] = useState(null);
  // Estado para indicar se os dados estão a ser carregados
  const [loading, setLoading] = useState(true);

  // Função para buscar as tarefas da API
  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (err) {
      setError('Não foi possível carregar as tarefas. Tente novamente mais tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // O useEffect vai executar a função fetchTasks assim que o componente for montado
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Função para adicionar uma nova tarefa
  const addTask = async (task) => {
    try {
      const response = await axios.post(API_URL, task);
      // Adiciona a nova tarefa (retornada pela API) ao início da lista no estado
      setTasks([response.data, ...tasks]);
    } catch (err) {
      setError('Erro ao adicionar a tarefa.');
      console.error(err);
    }
  };

  // Função para alternar o status de uma tarefa (pendente/concluida)
  const toggleTaskStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'pendente' ? 'concluida' : 'pendente';
    try {
      await axios.put(`${API_URL}/${id}/status`, { status: newStatus });
      // Atualiza o estado localmente para refletir a mudança imediatamente
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      ));
    } catch (err) {
      setError('Erro ao atualizar o status da tarefa.');
      console.error(err);
    }
  };

  // Função para excluir uma tarefa
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      // Remove a tarefa da lista no estado
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      setError('Erro ao excluir a tarefa.');
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="/logo.svg" className="app-logo" alt="logo da aplicação" />
        <h1>Lista de Tarefas</h1>
      </header>
      <main>
        <TaskForm onAddTask={addTask} />
        {error && <p className="message error">{error}</p>}
        {loading ? (
          <p className="message">A carregar tarefas...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onToggleStatus={toggleTaskStatus}
            onDelete={deleteTask}
          />
        )}
      </main>
    </div>
  );
}

export default App;
