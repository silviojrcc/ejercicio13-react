import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import CardTempertatura from './CardTempertatura';

const Formulario = () => {

    

    return (
        <Container className='mt-5 text-center'>
            <Form className='text-light '>
                <Form.Group as={Row}>
                    <Form.Label column sm="10" md="4">
                         Elegir una ciudad
                    </Form.Label>
                    <Col sm="10" md="6">
                        <Form.Control placeholder='ciudad'></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='my-4'>
                    <Form.Label column sm="10" md="4">
                         Elegir un país
                    </Form.Label>
                    <Col sm="10" md="6">
                        <Form.Control placeholder='pais'></Form.Control>
                    </Col>
                </Form.Group>
                <Button type='submit'>Consultar clima</Button>
            </Form>
            <div className='d-flex justify-content-center align-items-center m-5'>
                <CardTempertatura></CardTempertatura>
            </div>
        </Container>
    );
};

export default Formulario;