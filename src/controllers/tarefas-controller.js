const TarefasDao = require("../dao/tarefas-dao");
const geraPaginaTodo = require('../views/todo_app');


class TarefasController {

    constructor(db) {
        this.tarefasDao = new TarefasDao(db)
    }


    homeTarefas() {

        return (req, res) =>{
            this.tarefasDao.listaTarefas()
            .then( tarefas => { 
                res.send(geraPaginaTodo(tarefas));
            })
        }
    }
}


module.exports = TarefasController;
