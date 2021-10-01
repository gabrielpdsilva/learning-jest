function sum(a, b) {
    if(isNaN(a) || isNaN(b)) {
        throw new Error('Both values has to be valid numbers.');
    }
    return ((+a) + (+b));
}
function calculate(a, b, operation) {
    switch(operation) {
        case '+':
            return sum(a, b);
        default:
            throw new Error('Invalid Operation');
    }
}
module.exports = {
    calculate,
    sum
}