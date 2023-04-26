import './styles.scss'

import { useState, useEffect } from 'react';

interface CardProps {
  id: number;
  title: string;
  description: string;
}

function Card({ id, title, description }: CardProps) {
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
    <div className="cards" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className='card' style={{ transform: `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scale})` }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function CardList() {
  const [cards, setCards] = useState<CardProps[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/cards')
            .then(response => response.json())
            .then(data => setCards(data));
    }, []);
  


  return (
    <div>
      {cards.map(card => (
        <Card key={card.id} id={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
}

export default CardList;
