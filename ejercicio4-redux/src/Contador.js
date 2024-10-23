    import React from 'react';
    import { connect } from 'react-redux';
    import { incrementarContador, decrementarContador } from './actions';
    import './Contador.css';

    function Contador({ contador, incrementarContador, decrementarContador }) {
    return (
        <div className="contador-container">
        <h1 className="contador-titulo">Contador: {contador}</h1>
        <div className="botones">
            <button className="boton" onClick={incrementarContador}>
            Incrementar
            </button>
            <button className="boton" onClick={decrementarContador} style={{ marginLeft: '10px' }}>
            Decrementar
            </button>
        </div>
        </div>
    );
    }

    const mapStateToProps = (state) => ({
    contador: state.contador,
    });

    const mapDispatchToProps = {
    incrementarContador,
    decrementarContador,
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Contador);
