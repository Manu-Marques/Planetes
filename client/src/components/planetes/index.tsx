import './styles.scss'
import { Link } from 'react-router-dom'

export default function Planetes() {
    return (
        <div className="planetes">
            <h1 className='planetes__title'>Les Planètes</h1>
            <div className="planetes__container">
                <div className="planetes__container__main">
                    <h2 className="planetes__container__mercury__title">Mercure</h2>
                    <p className="planetes__container__mercury__description">Mercure est la planète la plus proche du Soleil et la plus petite du Système solaire.</p>
                    <img className="planetes__container__mercury__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="mercury" />
                    <Link to="/planetes/details_planetes" className="planetes__container__mercury__link">En savoir plus</Link>
                </div>
                <div className="planetes__container__main">
                    <h2 className="planetes__container__mercury__title">Mercure</h2>
                    <p className="planetes__container__mercury__description">Mercure est la planète la plus proche du Soleil et la plus petite du Système solaire.</p>
                    <img className="planetes__container__mercury__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="mercury" />
                    <Link to="/planetes/details_planetes" className="planetes__container__mercury__link">En savoir plus</Link>
                </div>
                <div className="planetes__container__main">
                    <h2 className="planetes__container__mercury__title">Mercure</h2>
                    <p className="planetes__container__mercury__description">Mercure est la planète la plus proche du Soleil et la plus petite du Système solaire.</p>
                    <img className="planetes__container__mercury__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="mercury" />
                    <Link to="/planetes/details_planetes" className="planetes__container__mercury__link">En savoir plus</Link>
                </div>
                <div className="planetes__container__main">
                    <h2 className="planetes__container__mercury__title">Mercure</h2>
                    <p className="planetes__container__mercury__description">Mercure est la planète la plus proche du Soleil et la plus petite du Système solaire.</p>
                    <img className="planetes__container__mercury__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="mercury" />
                    <Link to="/planetes/details_planetes" className="planetes__container__mercury__link">En savoir plus</Link>
                </div>
                <div className="planetes__container__main">
                    <h2 className="planetes__container__mercury__title">Mercure</h2>
                    <p className="planetes__container__mercury__description">Mercure est la planète la plus proche du Soleil et la plus petite du Système solaire.</p>
                    <img className="planetes__container__mercury__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="mercury" />
                    <Link to="/planetes/details_planetes" className="planetes__container__mercury__link">En savoir plus</Link>
                </div>
            </div>
        </div>
    );
}