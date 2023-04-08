import { Link } from "react-router-dom";
import Planetes from '../../../src/assets/planetes.jpg';
import "./styles.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
      </div>
      <nav className="header__nav">
        <li className="header__menu">
          <Link className="header__lunes" to="/lunes">Lunes</Link>
          <Link className="header__planetes" to="/planetes">Planètes</Link>
          <Link className="header__news" to="/news">News</Link>
        </li>
        <Link to="/"><img src={Planetes} alt="banniere" /></Link>
        <li className="header__connection">
          <Link className="header__login" to="/login">Login</Link>
          <Link className="header__register" to="/register">Register</Link>
        </li>
      </nav>
    </div>
  );
};
