import * as React from 'react';
import './register.scss';

export default function Register() {
    return (
        <div className="register">
            <div className="register__title">
                <h1 className='register__title__container'>S'inscrire</h1>
            </div>
            <div className="register__form">
                <form className='register__form__container'>
                    <h1 className='register__form__email'>Email</h1>
                    <input type="text" placeholder="Email" />
                    <h1 className='register__form__password'>Mot de passe</h1>
                    <input type="password" placeholder="Mot de passe" />
                    <button className='register__form__button'>Se connecter</button>
                </form>
            </div>
            <div className="register__forgot">
                <button>Mot de passe oublié</button>
            </div>
        </div>
    )
}