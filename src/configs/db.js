const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/configs/database.db');


//Processamento de sinal inicio db e encerramento

process.on('SIGINT', () =>
    db.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = db;
