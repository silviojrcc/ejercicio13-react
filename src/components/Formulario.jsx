import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import CardTempertatura from './CardTempertatura';
import { useForm } from 'react-hook-form';

const Formulario = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <Container className='mt-5 text-center'>
            <Form className='text-light' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group as={Row}>
                    <Form.Label column sm="10" md="4">
                         Elegir una ciudad
                    </Form.Label>
                    <Col sm="10" md="6">
                        <Form.Control placeholder='ciudad' type='text' {...register("city", {
                            required: true,
                            maxLength: 30,
                            minLength: 3,
                            pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u
                        })}></Form.Control>
                        <div className='error-container'>
                            {errors.city?.type === "required" && <div className='error-msg'>Debe ingresar una ciudad</div>}
                            {errors.city?.type === "maxLength" && <div className='error-msg'>No debe superar los 30 caracteres</div>}
                            {errors.city?.type === "minLength" && <div className="error-msg">Debe contener 3 caracteres o mas</div>}
                            {errors.city?.type === "pattern" && <div className='error-msg'>Debe ingresar un nombre válido</div>}
                        </div>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='my-4'>
                    <Form.Label column sm="10" md="4">
                         Elegir un país
                    </Form.Label>
                    <Col sm="10" md="6">
                        <Form.Control placeholder='pais' type='text' {...register("country", {
                            required: true,
                            maxLength: 40,
                            minLength: 3,
                            pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/u
                        })}></Form.Control>
                        <div className='error-container'>
                            {errors.country?.type === "required" && <div className='error-msg'>Debe ingresar un país</div>}
                            {errors.country?.type === "maxLength" && <div className='error-msg'>No debe superar los 40 caracteres</div>}
                            {errors.country?.type === "minLength" && <div className="error-msg">Debe contener 3 caracteres o mas</div>}
                            {errors.country?.type === "pattern" && <div className='error-msg'>Debe ingresar un nombre válido</div>}
                        </div>
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