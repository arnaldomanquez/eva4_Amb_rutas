
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hombres from './components/hombres';
import Inicio from './components/inicio';
import Navbar from './components/navbar';
import Mujeres from './components/mujeres';
import Contacto from './components/Contacto';

import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <>
    <Navbar />
      <div className="Aplicacion">
        <Routes>
          <Route path="/" element={ <Inicio /> } />
          <Route path="/hombres" element={ <Hombres /> } />
          <Route path="/mujeres" element={ <Mujeres /> } />
          <Route path="/Contacto" element={ <Contacto /> } />
        
        </Routes>

      </div>
       
    </>
  );
}

function onloadparaselect1(){
  var edd = document.getElementById("edd")
  for (let i = 1; i <= 100; i++) {
      edd.innerHTML += '<option value='+i+'>'+i+'</option>'
      
  }
}

export default App;
