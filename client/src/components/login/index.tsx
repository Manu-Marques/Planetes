import './styles.scss';
import { useState } from 'react';

interface FormValues {
    email: string;
    password: string;
}

export default function Login() {

    const [formValues, setFormValues] = useState<FormValues>({
        email: "",
        password: "",
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="container__login">
            <h1 className='container__login__title'>Se connecter</h1>
            <form className='container__login__form' onSubmit={handleSubmit}>
                <label className='container__login__email' htmlFor="email">Adresse e-mail</label>
                <input
                    className='container__login__email__input'
                    type="email"
                    name="email"
                    id='email'
                    value={formValues.email}
                    onChange={handleChange}
                    required
                />
                <label className='container__login__password' htmlFor="password">Mot de passe</label>
                <input
                    className='container__login__password__input'
                    type="password"
                    name="password"
                    id='password'
                    value={formValues.password}
                    onChange={handleChange}
                    required
                />
                <div className='container__login__forgot'>
                    <a className='container__login__forgot__password' href='/forgot-password'>Mot de passe oublié</a>
                </div>
                <button className='container__login__submit' type="submit">Se connecter</button>
            </form>
        </div>
    );
}