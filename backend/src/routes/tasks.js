// Importa o Express e cria um router
const express = require('express');
const router = express.Router();

// Importa o controlador de tarefas
const taskController = require('../controllers/taskController');

// Define as rotas para o CRUD (Create, Read, Update, Delete)

// Rota GET para listar todas as tarefas
router.get('/', taskController.getAllTasks);

// Rota POST para criar uma nova tarefa
router.post('/', taskController.createTask);

// Rota PUT para atualizar o status de uma tarefa específica pelo ID
router.put('/:id/status', taskController.updateTaskStatus);

// Rota DELETE para excluir uma tarefa específica pelo ID
router.delete('/:id', taskController.deleteTask);

// Exporta o router para ser usado no servidor principal
module.exports = router;
