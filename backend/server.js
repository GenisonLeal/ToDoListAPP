// Importa as bibliotecas necessárias
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Carrega as variáveis de ambiente

// Importa as rotas de tarefas
const taskRoutes = require('./src/routes/tasks');

// Inicializa a aplicação Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors()); // Habilita o CORS para permitir requisições do front-end
app.use(express.json()); // Permite que o servidor entenda requisições com corpo em JSON

// Rota principal da API
app.use('/api/tasks', taskRoutes);

// Rota de "health check" para verificar se o servidor está a funcionar
app.get('/', (req, res) => {
  res.send('API To-Do List está a funcionar!');
});

// Inicia o servidor e fica à escuta na porta definida
app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});