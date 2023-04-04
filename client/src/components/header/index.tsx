import { Link } from "react-router-dom";
import photo from '../../../src/assets/photo.jpg';
import "./styles.scss";
import Login from "../login";
import Register from "../register";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={photo} alt="Logo" />
        <Link to="/">
          <h1>Planètes</h1>
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <Link to="/login">Login
          </Link>
          <Link to="/register">Register
          </Link>
        </ul>
      </nav>
    </div>
  );
};
