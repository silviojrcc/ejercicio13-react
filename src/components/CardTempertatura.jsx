import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import clearImg from "../assets/clear.jpg";
import cloudImg from "../assets/clear.jpg";
import rainImg from "../assets/clear.jpg";

const CardTempertatura = ({ weatherInfo }) => {

    const weatherImages = {
        Clear: clearImg,
        Clouds: cloudImg,
        Rain: rainImg,
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={weatherImages[weatherInfo.weather[0].main]} />
            <Card.Body className='text-center'>
                <Card.Title>{ weatherInfo.main.temp - 273}°</Card.Title>
                <Card.Text>{ weatherInfo.weather[0].main}</Card.Text>
                <Card.Text className='p-3'>
                    { weatherInfo.name }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

CardTempertatura.propTypes = {
    
};

export default CardTempertatura;