import { useState } from 'react';

// Créez un nouveau contexte pour gérer l'authentification
import { createContext } from "react";


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

        // Logique d'authentification Login
        const [isLogin, setIsLogin] = useState<boolean>(false);

        const handleLogin = async (email: string, password: string) => {
    
            const response = await fetch("http://localhost:3000/signup", {
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
                console.log("error");
            }
        };

        // Logique d'authentification Logout
        const handleLogout = () => {
                localStorage.removeItem("token");
                setIsLogin(false);
            };

    return (
        <AuthContext.Provider value={{ isLogin, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
