const db = require('../configs/db'); //referencia ao banco de dados 

const TarefasDao = require('../dao/tarefas-dao'); // refencia ao tarefas dao


const TarefasController = require('../controllers/tarefas-controller');
const DeletaController = require('../controllers/deleta-controller');
const AdicionaController = require('../controllers/adiciona-controller');
const AtualizarController = require('../controllers/atualiza-controller');
const AtualizaController = require('../controllers/atualiza-controller');

// const deletaController = new DeletaController(db);
// const tarefasController = new TarefasController(db);
// const adicionaController = new AdicionaController(db);
// const atualizarController = new AtualizaController(db);




module.exports = (app) => {

  app.get('/', TarefasController.homeTarefas()); 
 
  app.delete('/tarefas/:id', DeletaController.deletaTarefa());

  app.post('/tarefas', AdicionaController.addTarefas());

  app.put('/tarefas/:id', AtualizarController.atualizaTarefa());


}



