import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Importamos el archivo de estilos

// Componente Inicio
function Inicio() {
  return <h1 className="titulo animacion-color">Bienvenido a la página de inicio</h1>;
}

// Componente Sobre
function Sobre() {
  return <h1 className="titulo animacion-color">Acerca de nosotros</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav className="navegacion">
          <ul>
            <li>
              <Link to="/inicio" className="link">Inicio</Link>
            </li>
            <li>
              <Link to="/sobre" className="link">Sobre</Link>
            </li>
          </ul>
        </nav>

        <div className="contenido">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
