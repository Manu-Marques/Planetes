import * as React from 'react';
import './login.css';

export default function Login() {
    return (
        <div className="login">
            <div className="login__signup">
                <button>Se connecter</button>
            </div>
            <div className="login__register">
                <button>S'inscrire</button>
            </div>
            <div className="login__forgot">
                <button>Mot de passe oublié</button>
            </div>
            <div className="login__form">
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Mot de passe" />
                    <button>Se connecter</button>
                </form>
                </div>
        </div>
    )
}