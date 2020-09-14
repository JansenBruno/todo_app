const express = require('express')
const rotasTarefas = require('./src/rotas/rotas-tarefas')

const app = express();
const port = 3000;

rotasTarefas(app); 

app.listen(port, () => 
  console.log("Iniciado com sucesso"));

module.exports = app; 

