const request = require('supertest');
const app = require('../app');

describe('Login usuário', () => {
    test('Login com sucesso', async () => {
        const result = await request(app)
            .post('/auth/login')
            .send({ email: 'admin@ifrs.edu.br', password: 'admin123' })
            .set('Accept', 'application/json')
            .expect(200);

        const resultado = result.body;
        expect(result.status).toBe(200);
        expect(resultado).toHaveProperty('token');
        expect(resultado).toHaveProperty('user');
        expect(typeof resultado.token).toBe('string');
        expect(resultado.user.email).toBe('admin@ifrs.edu.br');
        expect(resultado.user.role).toBe('admin');
    });

    test('Login com erro', async () => {
        const result = await request(app)
            .post('/auth/login')
            .send({ email: 'admin@ifrs.edu.br', password: 'admin1233' })
            .set('Accept', 'application/json')
            .expect(401);

        const resultado = result.body;
        expect(result.status).toBe(401);
        expect(resultado).toHaveProperty('message');
        expect(resultado.message).toMatch('Senha inválida');
    });
});

describe('Listagem de eventos', () => {
    test('Listar eventos', async () => {
        const result = await request(app)
            .get('/events')
            .expect(200);

        const resultado = result.body;
        expect(result.status).toBe(200);
        expect(resultado).toHaveProperty('listagem');
        expect(Array.isArray(resultado.listagem)).toBe(true);
        expect(resultado.listagem.length).toBeGreaterThan(0);
    });
});
