import { Link } from "react-router-dom";
import Planetes from '../../../src/assets/planetes.jpg';
import "./styles.scss";

interface HeaderProps {
  isLogin: boolean;
  handleLogout: () => void;
}

export default function Header({ isLogin, handleLogout }: HeaderProps) {
  return (
    <div className="header">
      <div className="header__logo">
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li><Link className="header__news" to="/news">News</Link></li>
          <li><Link className="header__planetes" to="/planetes">Planètes</Link></li>
          <li><Link className="header__lunes" to="/lunes">Lunes</Link></li>
        </ul>
        <Link className="header__image" to="/"><img src={Planetes} alt="banniere" /></Link>
          {isLogin ? (
            <>
              <button className="header__logout" onClick={handleLogout}>
                Déconnexion
              </button>
              <button className="header__profil">
                Profil
              </button>
            </>
          ) : (
            <div className="header__connection">
              <Link className="header__login" to="/login">Login</Link>
              <Link className="header__register" to="/signup">Register</Link>
            </div>
          )}
      </nav>
    </div>
  );
};
