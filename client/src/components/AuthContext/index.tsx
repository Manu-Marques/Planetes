import {createContext} from 'react';
import { User, UserProfile } from '../types';

interface AuthContextProps {
    isLogin: boolean;
    user: User | null;
    userProfile: UserProfile | null;
    firstName: string;
    lastName: string;
    handleRegister: (email: string, password: string, firstName: string, lastname: string) => void;
    handleLogin: (email: string, password: string) => void;
    handleLogout: () => void;
    setIsLogin: (value: boolean) => void;
    setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextProps>({
    isLogin: false,
    firstName: "",
    lastName: "",
    user: null,
    userProfile: null,
    handleRegister: (email: string, password: string, firstName: string, lastname: string) => { },
    handleLogin: (email: string, password: string) => { },
    handleLogout: () => { },
    setIsLogin: (value: boolean) => { },
    setUser: (user: User | null) => { },
    });