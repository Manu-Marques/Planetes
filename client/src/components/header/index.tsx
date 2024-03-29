import { Link } from "react-router-dom";
import Planetes from '../../../src/assets/planetes.jpg';
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import "./styles.scss";

interface HeaderProps {
  isLogin: boolean;
  handleLogout: () => void;
}

export default function Header() {

  const { isLogin, handleLogout, userProfile } = useContext(AuthContext);

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
          <div className="header__user-profil">
            { userProfile ? (
            <Link className="header__profil" to={`/profil/${userProfile?.id}`}>
              Profil
            </Link>
            ) : (
              <Link className="header__profil" to={`/profil/`}>
                Profil
              </Link>
            )}
              <Link className="header__logout" to="/" onClick={handleLogout}>
                Déconnexion
              </Link>
          </div>
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
