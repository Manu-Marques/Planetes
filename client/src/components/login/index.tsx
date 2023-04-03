import './styles.scss';
import { useState } from 'react';
import GoBack from '../arrowBack';

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
        <div className="container">
            <GoBack />
            <h1 className='container__title'>Se connecter</h1>
            <form className='container__form' onSubmit={handleSubmit}>
                <label className='container__email' htmlFor="email">Adresse e-mail</label>
                <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                />
                <label className='container__password' htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    required
                />
                <div className='container__forgot'>
                    <a className='container__forgot__password' href='/forgot-password'>Mot de passe oublié</a>
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}
