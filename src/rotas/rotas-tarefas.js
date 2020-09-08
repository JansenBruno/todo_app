const geraPaginaTodo = require('../views/todo_app');

let tarefa = [{
  titulo: "Dentista",
  descricao: "ir ao dentista amanha"

},
{
  titulo: "Compras",
  descricao: "ir ao mercado"
},
{
  titulo: "Trabalho",
  descricao: "Verificar"

}]

let arraydb = [{
  nome: 'Lucio',
  tarefas: [{
    titulo: "Yoga",
    descrição: "yoga segunda e quarta"
  }]
},
{
  nome: 'Jussara',
  tarefas: [{
    titulo: "Musculação",
    descrição: "Malhar todo dia"
  }]
}
]


module.exports = (app) => {


  app.get('/', (req, res) => {

    res.send(geraPaginaTodo(tarefa));
  });

  app.get('/:id', (req, res) => {
    res.send(geraPaginaTodo(tarefa))

  });

  app.get('/testenodemon', (req, res) => {
    res.send(`<h1>Rota testada utilizando nodemon</h1>`);
  });
} 