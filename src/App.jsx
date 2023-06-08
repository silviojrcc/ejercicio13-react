import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Titulo from './components/Titulo';
import CardTempertatura from './components/CardTempertatura';

function App() {

  return (
    <>
      <Titulo content={"Aplicación de clima"}></Titulo>
      <Formulario></Formulario>
      <div className='d-flex justify-content-center align-items-center m-5'>
        <CardTempertatura></CardTempertatura>
      </div>
    </>
  )
}

export default App;
