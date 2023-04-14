import './styles.scss';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Carousel from '../carousel';

export default function Home() {

    return (
        <div className="home">
            <div className="home__carousel">
                <Carousel />
                </div>
        </div>
    );
}
