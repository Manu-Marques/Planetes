import './styles.scss';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';

interface FormValues {
    email: string;
    password: string;
}

export default function Login() {

    const navigate = useNavigate();
    const { handleLogin } = useContext(AuthContext);

    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin(email, password);
        navigate("/profil");
    };

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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label className='container__login__password' htmlFor="password">Mot de passe</label>
                <input
                    className='container__login__password__input'
                    type="password"
                    name="password"
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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