import './styles.scss';
import { Link } from 'react-router-dom'

export default function Lunes() {
    return (
        <div className="lunes">
            <h1 className='lunes__title'>Les Lunes</h1>
            <div className="lunes__container">
                <div className="lunes__container__main">
                    <h2 className="lunes__container__orbite__title">Lunes</h2>
                    <p className="lunes__container__orbite__description">lunes est la planète la plus proche du Soleil et la plus petite du Système solaire.</p>
                    <img className="lunes__container__orbite__image" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg" alt="lunes" />
                    <Link to="/lunes/details_lunes" className="planetes__container__mercury__link">En savoir plus</Link>
                </div>
                <div className="lunes__container__main">
                    <h2 className="lunes__container__orbite__title">lunes</h2>
                    <p className="lunes__container__orbite__description">lunes est la planète la plus proche du Soleil et la plus petite du Système solaire.</p>
                    <img className="lunes__container__orbite__image" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg" alt="lunes" />
                    <Link to="/lunes/details_lunes" className="planetes__container__mercury__link">En savoir plus</Link>
                </div>
                <div className="lunes__container__main">
                    <h2 className="lunes__container__orbite__title">lunes</h2>
                    <p className="lunes__container__orbite__description">lunes est la planète la plus proche du Soleil et la plus petite du Système solaire.</p>
                    <img className="lunes__container__orbite__image" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg" alt="lunes" />
                    <Link to="/lunes/details_lunes" className="planetes__container__mercury__link">En savoir plus</Link>
                </div>
                <div className="lunes__container__main">
                    <h2 className="lunes__container__orbite__title">lunes</h2>
                    <p className="lunes__container__orbite__description">lunes est la planète la plus proche du Soleil et la plus petite du Système solaire.</p>
                    <img className="lunes__container__orbite__image" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg" alt="lunes" />
                    <Link to="/lunes/details_lunes" className="planetes__container__mercury__link">En savoir plus</Link>
                </div>
                <div className="lunes__container__main">
                    <h2 className="lunes__container__orbite__title">lunes</h2>
                    <p className="lunes__container__orbite__description">lunes est la planète la plus proche du Soleil et la plus petite du Système solaire.</p>
                    <img className="lunes__container__orbite__image" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg" alt="lunes" />
                    <Link to="/lunes/details_lunes" className="planetes__container__mercury__link">En savoir plus</Link>
                </div>
            </div>
        </div>
    );
    }