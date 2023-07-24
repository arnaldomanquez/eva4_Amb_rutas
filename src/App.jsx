
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hombres from './components/hombres';
import Inicio from './components/inicio';
import Navbar from './components/navbar';
import Mujeres from './components/mujeres';




function App() {
  return (
    <>
    <Navbar />
      <div className="Aplicacion">
        <Routes>
          <Route path="/" element={ <Inicio /> } />
          <Route path="/hombres" element={ <Hombres /> } />
          <Route path="/mujeres" element={ <Mujeres /> } />
        </Routes>

      </div>
       
    </>
  );
}

export default App;
