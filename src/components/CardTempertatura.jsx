import React from 'react';
import { Card } from 'react-bootstrap';
import clearImg from "../assets/clear.jpg";
import cloudImg from "../assets/clear.jpg";
import rainImg from "../assets/clear.jpg";

export const CardTempertatura = ({ temperature, weatherStatus, city, statusCode }) => {

    const weatherImages = {
        Clear: clearImg,
        Clouds: cloudImg,
        Rain: rainImg,
    };

    const tempInCelcius = (temperature - 273).toFixed(2);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ weatherImages[weatherStatus] } />
            <Card.Body className='text-center'>
                <Card.Title>{ tempInCelcius }°</Card.Title>
                <Card.Text>{ weatherStatus }</Card.Text>
                <Card.Text className='p-3'>
                    { city }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
