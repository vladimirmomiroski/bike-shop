import React from 'react'
import './Card.css'

export default function Card({img, name, price}) {
    return (
        <div className='card'>
            <div className='image-box'>
                <img className="img-bike" src={`images/${img}.png`} alt="Card Bike" />
            </div>
            <div className="bike-info">
                <h3 className="bike-model">{name}</h3>
                <p className="bike-price">{price} $</p>
            </div>
        </div>
    )
}
