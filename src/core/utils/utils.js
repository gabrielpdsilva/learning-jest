export function isNumeric(number) {
    if(number === '') {
        return false;
    }
    if(number === null) {
        return false;
    }
    if(number === []) {
        return false;
    }
    if(Array.isArray(number)) {
        return false;
    }
    return !isNaN(number);
}