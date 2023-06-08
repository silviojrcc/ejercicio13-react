import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const CardTempertatura = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/000/538/537/original/sunny-and-cloudy-with-blue-sky-background-vector-illustration.jpg" />
            <Card.Body className='text-center'>
                <Card.Title>60°</Card.Title>
                <Card.Text>soleado</Card.Text>
                <Card.Text className='p-3'>
                    Temperatura en San Miguel de Tucumán
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

CardTempertatura.propTypes = {
    
};

export default CardTempertatura;