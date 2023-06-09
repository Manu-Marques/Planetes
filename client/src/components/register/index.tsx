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

    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    

    const response = await fetch("http://localhost:3000/signup", {
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
        <div className="container__register">
            <h1 className='container__register__title' >S'inscrire</h1>
            <form className='container__register__form' onSubmit={handleSubmit}>
                <label className='container__register__email' htmlFor="email">Adresse e-mail</label>
                <input
                    className='container__register__email__input'
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label className='container__register__password' htmlFor="password">Mot de passe</label>
                <input
                    className='container__register__password__input'
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className='container__register__submit' type="submit">S'inscrire</button>
            </form>
        </div>
    );
}
