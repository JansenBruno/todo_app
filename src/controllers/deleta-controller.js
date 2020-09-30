const DeletaDao = require("../dao/delete-dao");
const db = require('./../configs/db.js')

class DeletaController {

    static deletaTarefa() {

        return ((req, res) => {
            const deletaDao = new DeletaDao(db);
            deletaDao.delete(req.params.id)
                .then((resp) =>
                    res.send(resp))
                .catch(erro =>
                    console.log(erro));
        })
    }
}

module.exports = DeletaController