import './styles.scss';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';


interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Register() {

    const navigate = useNavigate();
    const { handleRegister } = useContext(AuthContext);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    
        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            handleRegister(email, password);
            navigate("/profil");
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
                        required
                    />
                    <label className='container__register__lastName' htmlFor="lastName">Nom</label>
                    <input
                        className='container__register__lastName__input'
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                    />
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
