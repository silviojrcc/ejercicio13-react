import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { CardTempertatura, Formulario, Titulo } from '../components';
import { useFetchWeather } from '../hooks/useFetchWeather';

function WeatherApp() {
    const [infoSubmitedForm, setInfoSubmitedForm] = useState({});
    const { weatherInfo, isLoading, error } = useFetchWeather(infoSubmitedForm);

    const { temperature, weatherStatus, city } = weatherInfo;

    const addInfoForm = (formInput) => {
        setInfoSubmitedForm(formInput);
    };

    const showComponent = () => {
        if (isLoading) {
            return (
                <div className="my-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            );
        }

        if (!isLoading && error) {
            return <p className="text-danger">{error}</p>;
        }

        return (
            <CardTempertatura
                temperature={temperature}
                weatherStatus={weatherStatus}
                city={city}
            />
        );
    };

    return (
        <>
            <Titulo content="Aplicación de clima" />
            <Formulario addInfoForm={addInfoForm} />
            <div className="d-flex justify-content-center align-items-center m-5">
                {showComponent()}
            </div>
        </>
    );
}

export default WeatherApp;
