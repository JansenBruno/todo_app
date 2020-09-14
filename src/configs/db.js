const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('./src/configs/database.db');


//Processamento de sinal inicio db e encerramento

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;