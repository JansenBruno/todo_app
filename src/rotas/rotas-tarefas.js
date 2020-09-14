const db = require('../configs/db'); //referencia ao banco de dados 

const TarefasDao = require('../dao/tarefas-dao'); // refencia ao tarefas dao

const TarefasController = require('../controllers/tarefas-controller');
const geraPaginaTodo = require('../views/todo_app');

const tarefasController = new TarefasController(db)


const tarefasDao = new TarefasDao(db);


module.exports = (app) => {

  app.get('/', tarefasController.homeTarefas())
  




  app.get('/testerapido', (req, res) => {
    
    
    res.send(geraPaginaTodo(tarefas));

  });
  }

