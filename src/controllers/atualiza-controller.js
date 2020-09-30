const AtualizaDao = require("../dao/atualiza-dao");
const db = require('./../configs/db.js')

class AtualizaController {

    static atualizaTarefa() {
        return (req, res) => {
            const atualizaDao = new AtualizaDao(db);
            atualizaDao.atualiza(req.body.tituloTarefa, req.body.descricaoTarefa, req.body.statusTarefa, req.params.id)
                .then(resp => {
                    res.redirect('/')
                })
                .catch(erro =>
                    console.log(erro));
        };
    };

};

module.exports = AtualizaController;