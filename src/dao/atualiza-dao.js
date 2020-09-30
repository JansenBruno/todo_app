class AtualizaDao {

    constructor(db) {
        this._db = db;

    }
// função assincrona com query para atualização com db
    atualiza(titulo, descricao, status, id_tarefas) {
        return new Promise((resolve, reject) => {
            this._db.run(
                `UPDATE tarefas SET titulo=?, descricao=?, status =? WHERE id_tarefas =?`, [titulo, descricao, status, id_tarefas],
                (err) => {
                    if (err) {
                        console.log(err)
                         reject('Tarefa não pode ser atualizada no banco de dados ')
                    }else
                     resolve('Tarefa atualizada com sucesso!');
                }

            );
        });
    }
}
module.exports = AtualizaDao
