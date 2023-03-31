import './styles.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    onClose: () => void;
}

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function Register({ onClose }: Props) {
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
        <div className="container">
            <div className="container__close">
                <button onClick={onClose} className="container__close__button">X</button>
            </div>
            <h1>S'inscrire</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Prénom</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formValues.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Nom de famille</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formValues.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
}

export default function App() {
    const [showRegister, setShowRegister] = useState(false);

    const handleShow = () => {
        setShowRegister(true);
    };

    const handleClose = () => {
        setShowRegister(false);
    };

    return (
        <div>
            {showRegister && <Register onClose={handleClose} />}
        </div>
    );
}