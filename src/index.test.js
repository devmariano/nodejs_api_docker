const request = require('supertest');
//forma buscando os parametros do teste no arquivo server
const {server} = require('./server');

describe('Name of the group', () => {
    it('should be able get main route', async() => {
        const response = await request(server).get("/");
        const { body, statusCode} = response;

        expect(statusCode).toEqual(200);
        expect(body).toHaveProperty("welcome");
        expect(body).toHaveProperty("batata");
    });
});

//outra foram de fazer buscando os parametros do teste num mock
const mock = ["welcome", "batata"];
describe('Name of the group', () => {
    it('should be able get main route in mock', async() => {
        const response = await request(server).get("/");
        const { body, statusCode} = response;

        expect(statusCode).toEqual(200);
        mock.map((prop) => expect(body).toHaveProperty(prop));
    });
});


