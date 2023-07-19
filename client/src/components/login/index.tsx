import './styles.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface FormValues {
    email: string;
    password: string;
}

export default function Login({ handleLogin }: { handleLogin: (email: string, password: string) => void}) {

    const navigate = useNavigate();

    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin(email, password);
        navigate("/profil");
    };

        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem("token", token);
        }
        else {
            console.log("error");
        }
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