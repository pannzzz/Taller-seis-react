    import React, { createContext, useState } from 'react';

    export const TemaContext = createContext();

    export const TemaProvider = ({ children }) => {
    const [tema, setTema] = useState('claro');

    const toggleTema = () => {
        setTema((prevTema) => (prevTema === 'claro' ? 'oscuro' : 'claro'));
    };

    return (
        <TemaContext.Provider value={{ tema, toggleTema }}>
        {children}
        </TemaContext.Provider>
    );
    };
