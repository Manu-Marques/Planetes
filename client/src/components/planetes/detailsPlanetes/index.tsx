import './styles.scss';

export default function DetailsPlanetes() {
    return (
        <div className='planete'>
            <div className="planete__container">
                <div className="planete__container__img">
                    <img className="planete__container__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="mercury" />
                </div>
                <h2 className="planete__container__title">Mercure</h2>
                <p className="planete__container__description">Mercure est la planète la plus proche du Soleil et la plus petite du Système solaire. Elle    </p>
            </div>
            <div className="planete__details">
                <div className="planete__details__container">
                    <h3 className="planete__details__title">Diamètre</h3>
                    <p className="planete__details__description">4 879 km</p>
                </div>
                <div className="planete__details__container">
                    <h3 className="planete__details__title">Diamètre</h3>
                    <p className="planete__details__description">4 879 km</p>
                </div>
                <div className="planete__details__container">
                    <h3 className="planete__details__title">Diamètre</h3>
                    <p className="planete__details__description">4 879 km</p>
                </div>
            </div>
        </div>
    )
}