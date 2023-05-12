import {useState } from 'react';

export default function Data() {
    const [data, setData] = useState<any[]>([]);

    fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(data => setData(data));

    return (
        <div className='data__container'>
            {data.map(data => (
                <div className='data__card'>
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                    <img src={data.image} alt="Planetes" />
                </div>
            ))}
        </div>
    );
}