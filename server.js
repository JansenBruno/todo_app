const express = require('express')
const rotasTarefas = require('./src/rotas/rotas-tarefas')

const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

const app = express();
const port = 3000;


app.use(cors());

app.use('/estatico', express.static('src/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body && req.body.idTarefa != 'null') {
    var method = req.body._method
    delete req.body._method
    return method
  }
}))



rotasTarefas(app); 
app.listen(port, () => 
  console.log("Iniciado com sucesso"));

module.exports = app; 

