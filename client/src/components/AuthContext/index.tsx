import {createContext} from 'react';

interface AuthContextProps {
    isLogin: boolean;
    firstName: string;
    lastName: string;
    handleRegister: (email: string, password: string, firstName: string, lastname: string) => void;
    handleLogin: (email: string, password: string) => void;
    handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    isLogin: false,
    firstName: "",
    lastName: "",
    handleRegister: (email: string, password: string, firstName: string, lastname: string) => { },
    handleLogin: (email: string, password: string) => { },
    handleLogout: () => { },
});