import { Container, Form, Row, Col } from 'react-bootstrap';

const Formulario = () => {
    return (
        <Container className='text-light mt-5 text-center'>
            <Form>
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
            </Form>
        </Container>
    );
};

export default Formulario;