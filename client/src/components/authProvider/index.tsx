import { useState } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const Navigate = useNavigate();

    // Logique d'authentification Login
    const handleLogin = async (email: string, password: string) => {

        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem("token", token);
            setIsLogin(true);
        }
        else {
        }
    };


    // Logique d'authentification Register
    const handleRegister = async (email: string, password: string, firstName: string, lastname: string) => {

        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, firstName, lastname }),
        });

        if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem("token", token);
            setIsLogin(true);
        }
        else {
            console.log("error");
        }
    };

    // Logique d'authentification Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLogin(false);
        Navigate("/")
    };

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                firstName,
                lastName,
                handleLogin,
                handleRegister,
                handleLogout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
