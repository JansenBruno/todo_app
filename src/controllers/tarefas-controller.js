const TarefasDao = require("../dao/tarefas-dao");
const geraPaginaTodo = require('../views/todo_app');
const db = require('./../configs/db.js')

class TarefasController {


    static homeTarefas() {
        return ((req, res) => {

            const tarefasDao = new TarefasDao(db);

            tarefasDao.listaTarefas()
                .then((rows) => {
                    if (rows.length > 0) {
                        res.send(geraPaginaTodo(rows));
                    };
                })
                .catch((err) => {
                console.log(err)
                });
        });
    }







}



module.exports = TarefasController;

