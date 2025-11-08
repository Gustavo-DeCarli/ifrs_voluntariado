const userService = require("../services/userService.js");

//TESTES UNITÁRIOS JEST

//Teste com sucesso de login
test("Deve logar o usuário com sucesso", async () => {

    const resultado = await userService.loginUser({
        email: 'admin@ifrs.edu.br',
        password: 'admin123'
    });

    expect(typeof resultado).toBe('object');
    expect(resultado).toHaveProperty('token');
    expect(resultado).toHaveProperty('user');
});

//Teste com erro de login
test("Deve dar erro no login", async () => {

    const resultado = userService.loginUser({
        email: 'admin@ifrs.edu.br',
        password: 'admin321'
    });

    await expect(resultado).rejects.toThrow('Senha inválida');
});

test("Deve criar um usuário", async () => {

    const resultado = await userService.createUser({
        email: 'admin2@ifrs.edu.br',
        password: 'admin123',
        role: 'admin'
    });

    expect(typeof resultado).toBe('object');
    expect(resultado.result.email).toBe('admin2@ifrs.edu.br');
    expect(resultado.result.role).toBe('admin');
    expect(resultado).toHaveProperty('result');
});


//TESTES COM JEST E INTEGRAÇÃO

