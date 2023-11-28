import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CatCard.css';
import gatoImage from "../../../assets/img/location.png";
import Infopet from '../../../pages/Infopet/Infopet';

const CatCard = ({ gatoImage, nameCat, ageCat, sexCat, colorCat }) => {
    // Destructuring props for easy access
    const navigate = useNavigate();  // Add this line to use the useNavigate hook

    // Function to handle button click, which navigates to a detailed event article page
    const handleButtonClick = () => {
        // Encoding data to be passed in the URL
        const encodedImageCat = encodeURIComponent(gatoImage);
        const encodedNameCat = encodeURIComponent(nameCat);
        const encodedAgeCat = encodeURIComponent(ageCat);
        const encodedSexCat = encodeURIComponent(sexCat);
        const encodedColorCat = encodeURIComponent(colorCat);

        // Update the URL with the encoded data
        navigate(`/Infopet/${encodedImageCat}/${encodedNameCat}/${encodedAgeCat}/${encodedSexCat}/${encodedColorCat}`);
    };

    // Rendering the component
    return (
        <div className='CatCard'>
            
            
                <div className='cont-izquierdo'>
                        <img src={gatoImage} alt="gato-img" />
                </div>

                <div className='cont-derecho'>
                    <div className='nombre-gato'>
                        <h1>{nameCat}</h1>
                    </div>

                    <div className='edad-gato'>
                        <p>Edad:{ageCat}</p>
                    </div>

                    <div className='sexo-gato'>
                        <p>Sexo:{sexCat}</p>
                    </div>

                    <div className='color-gato'>
                        <p>Color:{colorCat}</p>
                    </div>

                    {/* Button to navigate to a detailed event article */}
                    <button className='mas-info' onClick={handleButtonClick}>
                        MÁS INFORMACIÓN
                    </button>
                </div>
            </div>
      
    );
};

export default CatCard;
