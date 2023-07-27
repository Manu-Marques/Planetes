import './styles.scss';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext';
import { User } from '../types';


interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignupResponse {
  token: string;
  message: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export default function Register() {

  const { setUser, setUserProfile, setIsLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formValues;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data: SignupResponse = await response.json();

      if (response.ok) {
        setMessage(data.message);
        if (data.user && data.user.id) {
          setUser(data.user)
          setUserProfile(data.user)
          setIsLogin(true);
          navigate(`/profil/${data.user.id}`);
        }        
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Erreur lors de l'inscription : " + (error as Error).message);
    }
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
          value={firstName}
          onChange={handleChange}
          required
        />
        <label className='container__register__lastName' htmlFor="lastName">Nom</label>
        <input
          className='container__register__lastName__input'
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          required
        />
        <label className='container__register__email' htmlFor="email">Adresse e-mail</label>
        <input
          className='container__register__email__input'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <label className='container__register__password' htmlFor="password">Mot de passe</label>
        <input
          className='container__register__password__input'
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <button className='container__register__submit' type="submit">S'inscrire</button>
      </form>
      <p className='container__register__message'>{message}</p>
    </div>
  );
}