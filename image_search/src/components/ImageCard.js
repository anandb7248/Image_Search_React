import React from 'react';
import './ImageCard.css'

function ImageCard(props) {
    return(
        <div className="container-card">
            <h3 className="image-title">{props.data.title}</h3>
            <img className="image-card" src={props.data.image} alt=""/>
        </div>
    );
}

export default ImageCard;