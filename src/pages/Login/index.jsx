import React, { useState } from 'react';
import { validateLogin } from './login';
import Validator from '../../core/validator/Validator';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    return (
        <div>
            <label>
                E-mail:
                <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <br/>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <br/>
            <button onClick={() => {
                let message;
                if(Validator.validEmail(email) && Validator.validPassword(password)) {
                    message = 'E-mail e senha válidos!';
                } else {
                    message = 'E-mail e/ou senha inválidos.';
                }
                setFeedbackMessage(message);
            }}>
                Login
            </button>
            <br/>
            {feedbackMessage}
        </div>
    )
}

export default Login;