// Importa a conexão com a base de dados (pool)
const db = require('../db');

// Função para obter todas as tarefas
exports.getAllTasks = async (req, res) => {
  try {
    const [tasks] = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar tarefas.', error });
  }
};

// Função para criar uma nova tarefa
exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  // Validação: verifica se o título foi fornecido
  if (!title) {
    return res.status(400).json({ message: 'O título da tarefa é obrigatório.' });
  }

  try {
    const query = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
    const [result] = await db.query(query, [title, description]);
    // Retorna a tarefa recém-criada com o seu novo ID
    res.status(201).json({ id: result.insertId, title, description, status: 'pendente' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar a tarefa.', error });
  }
};

// Função para atualizar o status de uma tarefa
exports.updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  // Validação: verifica se o status é válido
  if (status !== 'pendente' && status !== 'concluida') {
    return res.status(400).json({ message: 'Status inválido. Use "pendente" ou "concluida".' });
  }

  try {
    const query = 'UPDATE tasks SET status = ? WHERE id = ?';
    const [result] = await db.query(query, [status, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    res.status(200).json({ message: 'Status da tarefa atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar a tarefa.', error });
  }
};

// Função para excluir uma tarefa
exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const query = 'DELETE FROM tasks WHERE id = ?';
    const [result] = await db.query(query, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }

    res.status(200).json({ message: 'Tarefa excluída com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir a tarefa.', error });
  }
};