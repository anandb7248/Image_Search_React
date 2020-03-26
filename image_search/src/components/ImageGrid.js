import React from 'react';

function ImageGrid(props) {
    //console.log(props.data);

    return(
        <div>
            <h1>Hello World</h1>
            <ul>
                {props.data.map(data => {
                    return <li key={data.id}>{data.image}</li>
                })}
            </ul>
        </div>
    );
}

export default ImageGrid;