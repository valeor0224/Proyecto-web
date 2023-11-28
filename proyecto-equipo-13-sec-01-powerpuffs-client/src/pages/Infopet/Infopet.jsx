import { useParams } from 'react-router-dom';  // Import the useParams hook
import PhotoName from './PhotoName/PhotoName';
import AplicarCard from './AplicarCard/AplicarCard';
import HistoriaCard from './HistoriaCard/HistoriaCard';
import './Infopet.css';

function Infopet() {
    const { encodedImageCat, encodedNameCat, encodedAgeCat, encodedSexCat, encodedColorCat } = useParams();

    const gatoImage = decodeURIComponent(encodedImageCat);
    const nameCat = decodeURIComponent(encodedNameCat);
    const ageCat = decodeURIComponent(encodedAgeCat);
    const sexCat = decodeURIComponent(encodedSexCat);
    const colorCat = decodeURIComponent(encodedColorCat);

    return (
        <>
            <div className="Info-pet-page">
                <PhotoName imgCat={gatoImage} nameCat={nameCat} />
                <HistoriaCard ageCat={ageCat} sexCat={sexCat} colorCat={colorCat} />
                <AplicarCard imgCat={gatoImage} nameCat={nameCat} />
            </div>
        </>
    );
}

export default Infopet;
