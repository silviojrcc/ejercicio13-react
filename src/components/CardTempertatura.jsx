import { Card } from 'react-bootstrap';
import clearImg from '../assets/clear.jpg';
import cloudImg from '../assets/cloud.jpg';
import rainImg from '../assets/rain.jpg';
import PropTypes from 'prop-types';

function CardTempertatura({
    temperature = null,
    weatherStatus = null,
    city = null,
}) {
    const weatherImages = {
        Clear: clearImg,
        Clouds: cloudImg,
        Rain: rainImg,
    };

    const tempInCelcius = (temperature - 273).toFixed(2);

    if (temperature === null && city === null && weatherStatus === null) {
        return <p>Busque una ciudad para obtener su clima.</p>;
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={weatherImages[weatherStatus]} />
            <Card.Body className="text-center">
                <Card.Title>{tempInCelcius}°</Card.Title>
                <Card.Text>{weatherStatus}</Card.Text>
                <Card.Text className="p-3">{city}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardTempertatura;

CardTempertatura.propTypes = {
    temperature: PropTypes.number,
    weatherStatus: PropTypes.string,
    city: PropTypes.string,
};
