const express = require('express')
const paginaTodo = require('./views/todo_app')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(paginaTodo);
});

app.listen(port, () => 
  console.log("Iniciado com sucesso"));

