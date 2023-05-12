import Card from '../card';
import { Link } from 'react-router-dom';



export default function News() {

    interface CardProps {
        title: string;
        description: string;
        image: string;
        link: string;
        angleX: number;
        angleY: number;
        scale: number;
    }

    const Cards = [
        {
            title: "Lunes",
            description: "lunes est la planète la plus proche du Soleil et la plus petite du Système solaire.",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
            link: "/lunes/details_lunes",
            angleX: 0,
            angleY: 0,
            scale: 1
        },
        {
            title: "Lunes",
            description: "lunes est la planète la plus proche du Soleil et la plus petite du Système solaire.",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
            link: "/lunes/details_lunes",
            angleX: 0,
            angleY: 0,
            scale: 1
        }
    ]


    return (
        <div className="news">
                <Card/>
        </div>
    );
    }
