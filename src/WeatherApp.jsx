import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardTempertatura, Formulario, Titulo } from './components';
import { useState } from 'react';
import { useFetchWeather } from './hooks/useFetchWeather';
import { Spinner } from 'react-bootstrap';


function WeatherApp() {

  const [infoSubmitedForm, setInfoSubmitedForm] = useState({});
  const { weatherInfo, isLoading } = useFetchWeather( infoSubmitedForm );
  
  const addInfoForm = (formInput) => {
    setInfoSubmitedForm(formInput);
  }

  const showComponent = (isLoading) ? (<div className="my-5"><Spinner animation="border" variant="primary" /></div>) : <CardTempertatura { ...weatherInfo }/>;
  // const showComponent =  !isLoading && <CardTempertatura weatherInfo={ weatherInfo }/>;

  return (
    <>
      <Titulo content={"Aplicación de clima"}></Titulo>
      <Formulario addInfoForm={ addInfoForm }/>
      <div className='d-flex justify-content-center align-items-center m-5'>
        {showComponent}
      </div>
    </>
  )
}

export default WeatherApp;
