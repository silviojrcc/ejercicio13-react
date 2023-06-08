import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Titulo from './components/Titulo';

function App() {

  return (
    <>
      <Titulo content={"Aplicación de clima"}></Titulo>
      <Formulario></Formulario>
    </>
  )
}

export default App;
