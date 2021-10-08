import Validator from './Validator';

describe('Testando validador de e-mail', () => {
    it('Deve retornar false se o e-mail estiver vazio', () => {
        const email = '';
        expect(() => Validator.validEmail(email).toBe(false));
    });
    it('Deve retornar false se o e-mail tiver mais de 100 caracteres', () => {
        const email = 'abcabcabcabcaabcabcabcabcabcabcabcbcabcabcabcabc@abcaabcabcbcabcabcabcabcabcabcabcabcabcabcabc.com';
        expect(() => Validator.validEmail(email).toBe(false));
    });
    it('Deve retornar true se o e-mail for válido', () => {
        const email = 'abc@email.com';
        expect(() => Validator.validEmail(email).toBe(true));
    });
    it('Deve retornar false se o e-mail for apenas números', () => {
        const email = '123456';
        expect(() => Validator.validEmail(email).toBe(false));
    });
    it('Deve retornar false se o e-mail estiver incompleto', () => {
        const email = 'a@a.c';
        expect(() => Validator.validEmail(email).toBe(false));
    });
    it('Deve retornar false se o e-mail acabar no @', () => {
        const email = 'a@';
        expect(() => Validator.validEmail(email).toBe(false));
    });
    it('Deve retornar false se o e-mail acabar no .', () => {
        const email = 'a@a.';
        expect(() => Validator.validEmail(email).toBe(false));
    });
});

describe('Testando validador de senha', () => {
    it('Deve retornar false se a senha estiver vazia', () => {
        const password = '';
        expect(() => Validator.validPassword(password).toBe(false));
    });
    it('Deve retornar false se a senha tiver menos de 6 caracteres', () => {
        const password = '123';
        expect(() => Validator.validPassword(password).toBe(false));
    });
    it('Deve retornar false se a senha tiver mais de 30 caracteres', () => {
        const password = '1212121212112121212121212121212121212121212121212';
        expect(() => Validator.validPassword(password).toBe(false));
    });
    it('Deve retornar true se a senha for válida', () => {
        const password = '1212121212112121212121212121212121212121212121212';
        expect(() => Validator.validPassword(password).toBe(true));
    });
});

describe('Testando validador de nome', () => {
    it('Deve retornar true se o nome for válido', () => {
        const name = 'Daniel Alves';
        expect(() => Validator.validName(name).toBe(true));
    });
    // TODO make more tests
});