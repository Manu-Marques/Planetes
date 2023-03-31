import React, { useState } from "react";

interface LoginProps {
  onClose: () => void;
}

function Login({ onClose }: LoginProps) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
}

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div>
      <h1>Header</h1>
      <button onClick={handleLoginClick}>Login</button>
      {showLogin && <Login onClose={handleCloseLogin} />}
    </div>
  );
}

export default Header;
