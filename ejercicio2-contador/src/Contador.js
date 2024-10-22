    import React, { useState, useEffect } from 'react';
    import './Contador.css';

    function Contador() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log(`El contador ha cambiado. Valor actual: ${contador}`);
    }, [contador]);

    const resetContador = () => {
        setContador(0);
    };

    return (
        <div className="contador-container">
        <h1>Contador: {contador}</h1>
        <div className="botones">
            <button className="boton" onClick={() => setContador(contador + 1)}>
            Incrementar
            </button>
            <button className="boton" onClick={() => setContador(contador - 1)}>
            Decrementar
            </button>
            <button className="boton reset" onClick={resetContador}>
            Resetear
            </button>
        </div>
        </div>
    );
    }

    export default Contador;
