import React, { Component } from 'react'
import Card from './Card'
import './Cards.css'

export default class Cards extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className='bike-container'>
                {data.map(({image, name, price, id}) => (
                   <Card key={id} img={image} name={name} price={price}/>
                ))}
            </div>
        )
    }
}
