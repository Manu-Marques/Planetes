import './styles.scss'
import { useState, useEffect } from 'react';

interface CardProps {
    id: number;
    name: string;
    description: string;
    image: string;
}

function Card({ id, name, description, image }: CardProps) {
    const [angleX, setAngleX] = useState<number>(0);
    const [angleY, setAngleY] = useState<number>(0);
    const [scale, setScale] = useState<number>(1);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const elRect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - elRect.x;
        const y = e.clientY - elRect.y;

        const midCardWidth = elRect.width / 2;
        const midCardHeight = elRect.height / 2;

        setAngleY((x - midCardWidth) / 8);
        setAngleX((y - midCardHeight) / 8);
        setScale(1.1);
    };

    const handleMouseLeave = () => {
        setAngleX(0);
        setAngleY(0);
        setScale(1);
    };

    return (
        <div className="lunes__cards">
            <div className='lunes__card' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scale})` }}>
                <h2>{name}</h2>
                <p>{description}</p>
                <img src={`/images/${image}`} alt={name} />
            </div>
        </div>
    );
}

export default function LunesList() {
    const [cards, setCards] = useState<CardProps[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/lunes')
            .then(response => response.json())
            .then(data => setCards(data));
    }, [])
    ;

    return (
        <div className='lunes__container'>
            {cards.map(card => (
                <Card key={card.id} id={card.id} name={card.name} description={card.description} image={card.image} />
            ))}
        </div>
    );
}
