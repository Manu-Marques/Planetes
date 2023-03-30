import * as React from 'react';
import './login.css';

export default function Login() {
    return (
        <div className="login">
            <div className="login__title">
                <h1>Login</h1>
            </div>
            <div className="login__form">
                <form>
                    <h1 className='login__form__email'>Email</h1>
                    <input type="text" placeholder="Email" />
                    <h1 className='login__form__mdp'>Mot de passe</h1>
                    <input type="password" placeholder="Mot de passe" />
                    <button className='login__form__button'>Se connecter</button>
                </form>
            </div>
            <div className="login__forgot">
                <button>Mot de passe oublié</button>
            </div>
        </div>
    )
}