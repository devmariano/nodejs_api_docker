const request = require('supertest');
//forma buscando os parametros do teste no arquivo server
const {server} = require('./server');

describe('GET Requisitons', () => {
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
describe('GET Requisitons', () => {
    it('should be able get main route in mock', async() => {
        const response = await request(server).get("/");
        const { body, statusCode} = response;

        expect(statusCode).toEqual(200);
        mock.map((prop) => expect(body).toHaveProperty(prop));
    });
});

//teste de post do create user
describe('POST Requisitons', () => {
it('should be able create user', async () => {
    const response = await request(server)
    .post("/users")
    .send({
        'id': 1,
        'name':'alex',
        'email':'teste@teste.com'
    })
    const {body, statusCode} = response;
    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty("id",1)
    expect(body).toHaveProperty("name","alex")
});
});

//melhorando teste de post do create user usando tomatchobject
describe('POST Requisitons', () => {
    it('should be able create user match', async () => {
        const response = await request(server)
        .post("/users")
        .send({
            'id': 1,
            'name':'alex',
            'email':'teste@teste.com'
        })
        const {body, statusCode} = response;
        expect(statusCode).toEqual(200);
        expect(body).toMatchObject({
            'id': 1,
            'name':'alex',
            'email':'teste@teste.com'
        })
    });
    });

//melhorando teste de post do create user usando tomatchobject e mock
const mockUser={
    'id': 1,
    'name':'alex',
    'email':'teste@teste.com'
}
describe('POST Requisitons', () => {
    it('should be able create user mock', async () => {
        const response = await request(server)
        .post("/users")
        .send(mockUser)
        const {body, statusCode} = response;
        expect(statusCode).toEqual(200);
        expect(body).toMatchObject({
            ...mockUser,
            id: 1,
        })
    });
    });

    describe('POST Requisitons', () => {
        it('should be not able create user', async () => {
            const response = await request(server)
            .post("/users")
            .send({})
            const {body, statusCode} = response;
            expect(statusCode).toEqual(400);
            
            expect(body).toHaveProperty("message","Dados do usuário devem ser preeenchidos")
            })
        });



