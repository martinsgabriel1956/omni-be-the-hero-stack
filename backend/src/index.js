const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

    /* Métodos HTTP:
    
    GET: Buscar uma informação do back end
    POST: Criar uma informação no back end
    PUT: Alterar uma informação no back end
    DELELE: Deletar uma informação no back end
    
    */
    
    /* Tipos de paramêtros:
    Query Params: Parâmentros nomeados enviados na rota após "?" (Filtros, paginação)
    Route Params: Parâmetros ultilizados para indentificar recursos
    Request Body: Corpo da requisição para criar ou alterar recursos
    
    */
    
    /* 
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
    
    */
    
    /* 
    Driver: SELECT * FROM users
    Query Builder: table('users).select('*').where()
    
    */