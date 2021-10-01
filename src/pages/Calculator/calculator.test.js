const { sum , calculate} = require('./calculator')

describe('Teste de soma', () => {
    it('Deve retornar 2 ao somar-se 1 com 1', () => {
        expect(sum(1, 1)).toEqual(2)
    });
    it('Deve retornar -4 ao somar-se 3 com -7', () => {
        expect(sum(3, -7)).toEqual(-4)
    });
    it('Deve retornar -10 ao somar-se -5 com -5', () => {
        expect(sum(-5, -5)).toEqual(-10)
    });
    it('Deve retornar 3 ao somar-se -2 com 5', () => {
        expect(sum(-2, 5)).toEqual(3)
    });
});

describe('Teste de operação', () => {
    it('Deve retornar 2 ao somar-se 1 com 1', () => {
        expect(calculate(1, 1, '+')).toEqual(2)
    });
    // In Jest, when you test for a case where an error should be thrown,
    // within your expect() wrapping of the function under testing, you
    // need to provide one additional arrow function wrapping layer in order for it to work
    // https://stackoverflow.com/questions/46042613/how-to-test-the-type-of-a-thrown-exception-in-jest
    it('Deve retornar uma exceção ao usar uma operação inválida', () => {
        expect(() => calculate(1, 1, 's')).toThrowError('Invalid Operation')
    });
    it('Deve retornar uma exceção ao usar dois valores inválidos', () => {
        expect(() => calculate('g', 'd', '+')).toThrowError('Both values has to be valid numbers.')
    });
    it('Deve retornar uma exceção quando o primeiro valor for inválido', () => {
        expect(() => calculate('g', 2, '+')).toThrowError('Both values has to be valid numbers.')
    });
    it('Deve retornar uma exceção quando o segundo valor for inválido', () => {
        expect(() => calculate(1, 'd', '+')).toThrowError('Both values has to be valid numbers.')
    });
});