import './styles.scss'
import { useState } from 'react'
import Register from '../register'
import Login from '../login'

export default function Header () {

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowRegister(false);
      };

      const handleRegisterClick = () => {
        setShowLogin(false);
        setShowRegister(true);
      };
    


    return (
        <div className="header">
            <h1 className="header__title">My App</h1>
            <div className="header__links">
                <button onClick={handleLoginClick} className="header__links__link" >Login</button>
                {showLogin && <Login />}
                <button onClick={handleRegisterClick} className="header__links__link">Register</button>
                {showRegister && <Register />}
            </div>
        </div>
    )
}