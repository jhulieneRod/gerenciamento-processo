import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const cardStyle = {
        backgroundColor: props.color, // Cor do card passada via props
    };
    return (
        <div className='card' style={cardStyle} onClick={props.onClick}>
            <div className="card-header">
                <i className={`fas fa-${props.icon}`} />
            </div>
            <div className="card-body">
                <div className="count">{props.count}</div>
                <div className="description">{props.description}</div>
            </div>
        </div>
    );
}

export default Card;
