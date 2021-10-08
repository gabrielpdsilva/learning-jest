import { isNumeric } from './utils';

describe('Testando valores numéricos', () => {
    it('Deve retornar true se o valor for inteiro', () => {
        const number = 10;
        expect(isNumeric(number)).toBe(true);
    });
    it('Deve retornar true se o valor for um número em string', () => {
        const number = '53';
        expect(isNumeric(number)).toBe(true);
    });
    it('Deve retornar true se o valor for decimal', () => {
        const number = 5.5;
        expect(isNumeric(number)).toBe(true);
    });
    it('Deve retornar false se o valor for vazio', () => {
        const number = '';
        expect(isNumeric(number)).toBe(false);
    });
    it('Deve retornar false se o valor for um vetor qualquer não vazio', () => {
        const number =[1, 2, 3];
        expect(isNumeric(number)).toBe(false);
    });
    it('Deve retornar false se o valor for um objeto', () => {
        const number = {name: 'Ana'};
        expect(isNumeric(number)).toBe(false);
    });
    it('Deve retornar false se o valor for nulo', () => {
        const number = null;
        expect(isNumeric(number)).toBe(false);
    });
    it('Deve retornar false se o valor for um vetor vazio', () => {
        const number = [];
        expect(isNumeric(number)).toBe(false);
    });
});