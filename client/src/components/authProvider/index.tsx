import { useState } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, UserProfile } from '../types';


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [user, setUser] = useState<User | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    const Navigate = useNavigate();


    // Logique d'authentification Login
    const handleLogin = async (email: string, password: string) => {

        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const { token, user: userData } = await response.json();
            localStorage.setItem("token", token);
            setIsLogin(true);
            setUser(userData);
            setUserProfile(userData);
            setFirstName("");
            setLastName("");

        }
        else {
            console.log("error", response.status);
        }
    };


    // Logique d'authentification Register
    const handleRegister = async (email: string, password: string, firstName: string, lastName: string) => {
        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, firstName, lastName }),
        });

        if (response.ok) {
            const { token, user: userData } = await response.json();            
            localStorage.setItem("token", token);
            setIsLogin(true);
            setUser(userData);
            setUserProfile(userData);
            setFirstName("");
            setLastName("");
        }
        else {
            console.log("error");
        }
    };

    // Logique d'authentification Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLogin(false);
        setFirstName("");
        setLastName("");
        setUser(null);
        Navigate("/")
    };

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                userProfile,
                user,
                firstName,
                lastName,
                handleLogin,
                handleRegister,
                handleLogout,
                setUserProfile,
                setIsLogin,
                setUser,
            }}>
            {children}
        </AuthContext.Provider>
    );
};