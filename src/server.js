//forma correta de importar o express quando se trata de api
const express = require('express');
const server = express();

server.use(express.json()); // nosso servidor vai expor os dados em formato json

server.get('/', (req, res) => {
    res.json({ 
        welcome: "Hello World, Alex",
        batata: "Rustica",
    })
})

server.post('/users', (req, res) => {
    const {body} = req;

    !body?.name || !body?.email
        ? res
            .status(400)
            .json({message: "Dados do usuário devem ser preeenchidos"})
        : res.json({...body, id: 1}).status(200);
})

//forma de exportar o servidor para o externo
module.exports = {
    server,
};