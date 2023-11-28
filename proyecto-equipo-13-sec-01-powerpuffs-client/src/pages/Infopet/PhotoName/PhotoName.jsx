import React, { useState } from 'react';
import './PhotoName.css';

function PhotoName({ gatoImage, nameCat }) {
    // Uncomment the line below if you need local state in this component
    // const [someState, setSomeState] = useState(initialValue);

    return (
        <div className="photoName">
            <div className='nombre-gato'>
                <h1>{nameCat}</h1>
            </div>
            <div className='imgCat'>
                <img src="https://cataas.com/cat" alt="gato-img" />
            </div>
            
        </div>
    );
}

export default PhotoName;
