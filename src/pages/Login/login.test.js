import { validateLogin } from './login';

describe('Teste de validação do formulário de LogIn', () => {
    it('Deve retornar uma mensagem se qualquer campo está vazio', () => {
        const email = '';
        const password = '';
        expect(() => validateLogin(email, password).toBe('Todos os campos devem ser preenchidos.'))
    });
    it('Deve retornar uma mensagem se o e-mail estiver vazio', () => {
        const email = '';
        const password = '123456';
        expect(() => validateLogin(email, password).toBe('Todos os campos devem ser preenchidos.'))
    });
    it('Deve retornar uma mensagem se a senha estiver vazia', () => {
        const email = 'abc@abc.com';
        const password = '';
        expect(() => validateLogin(email, password).toBe('Todos os campos devem ser preenchidos.'))
    });
    it('Deve retornar uma mensagem se o e-mail tiver mais de 100 caracteres', () => {
        const email = 'abcabcabcabcaabcabcabcabcabcabcabcbcabcabcabcabc@abcaabcabcbcabcabcabcabcabcabcabcabcabcabcabc.com';
        const password = '123456';
        expect(() => validateLogin(email, password).toBe('O e-mail não pode exceder 100 caracteres.'))
    });
    it('Deve retornar uma mensagem se a senha tiver menos de 6 caracteres', () => {
        const email = 'abc@abc.com';
        const password = '123';
        expect(() => validateLogin(email, password).toBe('A senha não pode ter menos de 6 caracteres.'))
    });
    it('Deve retornar uma mensagem se a senha tiver mais de 30 caracteres', () => {
        const email = 'abc@abc.com';
        const password = '1212121212112121212121212121212121212121212121212';
        expect(() => validateLogin(email, password).toBe('A senha não pode exceder 30 caracteres.'))
    });
    it('Deve retornar uma mensagem se os dados pro login forem válidos', () => {
        const email = 'abc@abc.com';
        const password = '123456';
        expect(() => validateLogin(email, password).toBe('Dados válidos para login.'))
    });
    it('Deve retornar uma mensagem se o e-mail for apenas números', () => {
        const email = '121212';
        const password = '123456';
        expect(() => validateLogin(email, password).toBe('E-mail inválido.'))
    });
});