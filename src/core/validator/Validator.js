import { isNumeric } from "../utils/utils";

export default class Validator {

    static validEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    static validPassword(password) {
        if(password === '') {
            return false;
        }
        if(password.length < 6) {
            return false;
        }
    
        if(password.length > 30) {
            return false;
        }
        return true;
    }

    static validName(name) {
        if(name === '' || name === null) {
            return false;
        }
        if(isNumeric(name)) {
            return false;
        }
        if(name.length < 10) {
            return false;
        }
        if(name.length > 50) {
            return false;
        }
        return true;
    }

}