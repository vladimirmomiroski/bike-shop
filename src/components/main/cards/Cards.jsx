import React, { Component } from 'react'
import Card from './Card'
import './Cards.css'
import { v4 as uuid } from 'uuid';

export default class Cards extends Component {
    render() {
        const {data} = this.props;
        console.log(data)
        return (
            <div className='bike-container'>
                {data.map(({image, name, price}) => (
                   <Card key={uuid()} img={image} name={name} price={price}/>
                ))}
            </div>
        )
    }
}
