//forma correta de importar o express quando se trata de api
const express = require('express');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('api_docker', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3388,
});

const connect = async() => {
    try {
        await sequelize.authenticate();
        console.log('Conexão estabelecida com sucesso');
    }catch(error) {
        console.error('Não foi possivel conectar ao DB', error)
    }
}
connect();


const server = express();

server.use(express.json()); // nosso servidor vai expor os dados em formato json
server.get('/', (req, res) => {
    res.json({ welcome: "Hello World, Alex" })
})

//forma de exportar o servidor para o externo
module.exports = {
    server,
};