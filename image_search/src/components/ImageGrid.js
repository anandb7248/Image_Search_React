import React from 'react';
import ImageCard from './ImageCard';
import './ImageGrid.css'

function ImageGrid(props) {
    return(
        <div>
            <ul>
                {props.data.map(data => {
                    return <ImageCard key={data.id} data={data} />
                })}
            </ul>
        </div>
    );
}

export default ImageGrid;