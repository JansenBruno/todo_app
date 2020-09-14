class TarefasDao {

    constructor(db) {
        this._db = db;

    }

    listaTarefas() {

        return new Promise((resolve, reject) => {

            this._db.all(
                `SELECT * FROM TAREFAS`,
                (err, rows) => {

                    if (err) {
                        return reject('Erro na consulta ao banco de dados');
                    } else {
                        resolve(rows);
                    }
                })
        })
    }


}

module.exports = TarefasDao;