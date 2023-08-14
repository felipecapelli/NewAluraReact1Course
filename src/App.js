import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
  //console.log(colaborador)
  setColaboradores([...colaboradores, colaborador])
  console.log(colaboradores)
}

  return (
    <div className="App">
      <h1>Olá Mundo</h1>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
