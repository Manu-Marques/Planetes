import './styles.scss';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';
import { User } from '../types';

interface FormValues {
    email: string;
    password: string;
  }
  
  interface LoginResponse {
    token: string;
    message: string;
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
    };
  }
  
  export default function Login() {

    const { setIsLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const [formValues, setFormValues] = useState<FormValues>({
      email: "",
      password: "",
    });
  
    const { email, password } = formValues;
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const [message, setMessage] = useState<string>("");
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
  
        const data: LoginResponse = await response.json();
  
        if (response.ok) {
          setMessage(data.message); 
          if (data.user && data.user.id) {
            setIsLogin(true);
            navigate(`/profil/${data.user.id}`);
          }
          } else {
          setMessage(data.message); 
        }
      } catch (error) {
        setMessage("Erreur lors de la connexion : " + (error as Error).message);
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
                    onChange={handleChange}
                    required
                />
                <label className='container__login__password' htmlFor="password">Mot de passe</label>
                <input
                    className='container__login__password__input'
                    type="password"
                    name="password"
                    id='password'
                    value={password}
                    onChange={handleChange}
                    required
                />
                <div className='container__login__forgot'>
                    <a className='container__login__forgot__password' href='/forgot-password'>Mot de passe oublié</a>
                </div>
                <button className='container__login__submit' type="submit">Se connecter</button>
            </form>
                <p className='container__login__message'>{message}</p>
        </div>
    );
}