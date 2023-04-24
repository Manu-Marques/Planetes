import './styles.scss';

export default function DetailsLunes () {
    return (
        <div className='lune'>
        <div className="lune__container">
            <div className="lune__container__img">
                <img className="lune__container__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="mercury" />
            </div>
            <h2 className="lune__container__title">Mercure</h2>
            <p className="lune__container__description">Mercure est la planète la plus proche du Soleil et la plus petite du Système solaire. Elle    </p>
        </div>
        <div className="lune__details">
            <div className="lune__details__container">
                <h3 className="lune__details__title">Diamètre</h3>
                <p className="lune__details__description">4 879 km</p>
            </div>
            <div className="lune__details__container">
                <h3 className="lune__details__title">Diamètre</h3>
                <p className="lune__details__description">4 879 km</p>
            </div>
            <div className="lune__details__container">
                <h3 className="lune__details__title">Diamètre</h3>
                <p className="lune__details__description">4 879 km</p>
            </div>
        </div>
    </div>
    )
}