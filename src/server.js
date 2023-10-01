//forma correta de importar o express quando se trata de api
const express = require('express');
const server = express();

server.use(express.json()); // nosso servidor vai expor os dados em formato json
server.get('/', (req,res)=>{
    res.json({welcome:"Hello World, Alex"})
})

//forma de exportar o servidor para o externo
module.exports = {
    server,
};