const express = require ('express');
const cors = require ('cors');
const mysql = require ('mysql2');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mysqlfatec',
    database: 'aulabd'
});

//Conectando ao banco de dados
db.connect((erro)=>{
    if (erro){
        console.error("Erro ao conectar ao MySQL:", erro);
    } else {
        console.log("Conectado ao MySQL com sucesso");
    }
});

    // Rota para cadastrar usuário
    app.post('/alunos', (req, res)=>{
        const {nome, cidade, estado} = req.body;

        const sql = 'INSERT INTO alunos (nome, cidade, estado) Values (?, ?, ?)';

        db.query(sql,[nome, cidade, estado],(err, result)=>{
            if(err)
            {
                return res.status(500).json({error: 'Erro ao cadastrar aluno !'});
            }
            return res.status(201).json({message: 'Aluno cadastrado com sucesso !', id: result.insertId});
        });
    });

    //Rota para consultar todos os usuários
    app.get('/alunos', (req, res) => {
        const sql = 'SELECT * FROM alunos';

        db.query(sql, (err, results)=>{
            if(err)
            {
                return res.status(500).json({error: 'Erro ao cadastrar aluno !'});
            }
            res.json(results);
        });
    });

    // Iniciando o servidor
    app.listen(PORT,()=>{
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
