import React from 'react';
import './Card.css';
import pin from '../assets/Fill 220.png';

const Card = (props) => {
  return (
    <div className='card'>
        <div className='card--img'><img className='image' src={props.item.image} alt='img'/></div>
        <div className='details'>
            <div className='location-details'>
                <img className='pin' src={pin} alt='pin' /><p>{props.item.location}</p>
                <a href={props.item.locationUrl}>Google Map Location</a>
            </div> 
            <div className='details-desc'>
                <h2>{props.item.title}</h2>
                <p className='date'>{props.item.date}</p>
                <p className='desc'>{props.item.description}</p>
            </div>           
        </div>
    </div>
  )
}

export default Card