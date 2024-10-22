    import React, { useContext } from 'react';
    import { TemaContext } from './TemaContext';
    import './TemaSwitcher.css'; // Importar los estilos actualizados

    function TemaSwitcher() {
    const { tema, toggleTema } = useContext(TemaContext); // Usamos useContext para acceder al valor del contexto

    return (
        <div className={`tema-container ${tema}`}>
        <h1 className="texto-tema">
            Tema actual: {tema === 'claro' ? '🌞 Claro' : '🌚 Oscuro'}
        </h1>
        <button className="boton" onClick={toggleTema}>
            Cambiar a tema {tema === 'claro' ? 'Oscuro' : 'Claro'}
        </button>
        </div>
    );
    }

    export default TemaSwitcher;
