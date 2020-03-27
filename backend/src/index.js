const express = require('express');
const routes = require('./routes');
const cors = require ('cors');

const {errors}= require ('celebrate');


const app = express();
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())


app.listen(3333)




/* 
*Rotas e recursos /users 
#Metodos HTTP
Get:buscar
Post: criar 
PUt: alterar
Delete: remove
*/
/* tipos de parametros
Querry: parametros nomeados enviados na rota simbolo de ? (filtro de paginação)
Route : parametro para inentificar recursos.
request body: corpo da requisição cria e alterar o recurso

*/
/* Banco de dados */
//sql-relacional
//NoSql

/* instal db */