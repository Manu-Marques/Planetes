import React from 'react';

export const AuthContext = React.createContext({
    isLogin: false,
    handleRegister: (email: string, password: string, name: string, lastname: string) => { },
    handleLogin: (email: string, password: string) => { },
    handleLogout: () => { },
});