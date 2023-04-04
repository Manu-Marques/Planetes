import './styles.scss';
import { useState } from 'react';
import Login from '../login';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Register() {
    const [formValues, setFormValues] = useState<FormValues>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="container__register">
            <h1 className='container__register__title' >S'inscrire</h1>
            <form className='container__register__form' onSubmit={handleSubmit}>
                <label className='container__register__firstName' htmlFor="firstName">Prénom</label>
                <input
                    className='container__register__firstName__input'
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                    required
                />
                <label className='container__register__lastName' htmlFor="lastName">Nom de famille</label>
                <input
                    className='container__register__lastName__input'
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                    required
                />
                <label className='container__register__email' htmlFor="email">Adresse e-mail</label>
                <input
                    className='container__register__email__input'
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                />
                <label className='container__register_password' htmlFor="password">Mot de passe</label>
                <input
                    className='container__register__password__input'
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    required
                />
                <label className='container__register__confirmPassword' htmlFor="confirmPassword">Confirmer le mot de passe</label>
                <input
                    className='container__register__confirmPassword__input'
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <button className='container__login__submit' type="submit">S'inscrire</button>
            </form>
        </div>
    );
}
