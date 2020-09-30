const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../../src/configs/database.db');


const TAREFAS = `
CREATE TABLE IF NOT EXISTS TAREFAS (
    id_tarefas INTEGER PRIMARY KEY AUTOINCREMENT, 
    titulo TEXT,
    descricao TEXT,
    status TEXT
)
`;

const ADD_TAREFAS = `
INSERT INTO TAREFAS (
    titulo,
    descricao,
    status
    )
VALUES ('Job', 'Seg a Sexta horario comercial', 'DOING'),
       ('Mentoria', 'Sabado as 10h', 'TODO'),
       ('Muay thai', 'Terça e Quinta as 20h', 'DOING')
      `

db.serialize(()=> {
    db.run(TAREFAS, (err)=> {
        if (err) {
            console.log('Erro na criação da tabela tarefas');
            process.exit(1);
        }
    });
    db.run(ADD_TAREFAS, (err) => {
        if (err) {
            console.log('Erro ao adicionar valores ao banco');
            process.exit(1);
        }
    })
})