const AdicionaDao = require("../dao/adiciona-dao");
const db = require('./../configs/db.js')


class AdcionaController { 
    static addTarefas() {

        return ((req, res) => {
            const adicionaDao = new AdicionaDao(db)
            adicionaDao.adiciona(req.body.tituloTarefa, req.body.descricaoTarefa, req.body.statusTarefa)
                .then(() => {
                res.redirect('/')}) 
                .catch(erro => 
                    console.log(erro));
            

        });
    };

}

module.exports = AdcionaController