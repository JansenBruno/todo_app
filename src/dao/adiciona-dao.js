class AdicionaDao {

    constructor(db) {
        this._db = db;

    }
    // função assincrona com query para intereção com db
    adiciona(titulo, descricao, status) {
        return new Promise((resolve, reject) => {
            this._db.run(`INSERT INTO TAREFAS (titulo, descricao, status) VALUES (?, ?, ?)`, [titulo, descricao, status],
                (err) => {
                    if (err) {
                        reject(`Erro ao adiciona a tarefa ${err}` );
                    } else {
                        resolve();
                    }
                });
        });

    };
};
        
module.exports = AdicionaDao         