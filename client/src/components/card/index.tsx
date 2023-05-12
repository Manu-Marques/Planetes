import './styles.scss';
import Planetes from '../../../src/assets/planetes.jpg';
import { useState, MouseEvent, useEffect } from 'react';


export default function Card() {
  const [angleX, setAngleX] = useState<number>(0);
  const [angleY, setAngleY] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
    setAngleY(0);
    setAngleX(0);
    setScale(1);
    };

    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then(response => response.json())
            .then(data => setCards(data));
    }, [])


  return (
    <div className="content" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className='card' style={{ transform: `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scale})` }}>
        <div className="card__title">
            <h1>Planetes</h1>
        </div>
        {cards.map(({image})=> (
        <img src={image}alt="Planetes" />
        ))}
      </div>
    </div>
  );
}
