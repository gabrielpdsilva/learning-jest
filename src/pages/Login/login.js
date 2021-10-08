import { isNumeric } from "../../core/utils/utils";

export function doLogin(email, password) {
    
}

export function validateLogin(email, password) {
    if(isNumeric(email)) {
        return 'E-mail inválido.';
    }
    if(email === '' || password === '') {
        return 'Todos os campos devem ser preenchidos.';
    }
    if(email.length > 100) {
        return 'O e-mail não pode exceder 100 caracteres.';
    }

    if(password.length < 6) {
        return 'A senha não pode ter menos de 6 caracteres.';
    }

    if(password.length > 30) {
        return 'A senha não pode exceder 30 caracteres.';
    }
    return 'Dados válidos para login.';
}