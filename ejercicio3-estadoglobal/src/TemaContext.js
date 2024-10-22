    import React, { createContext, useState } from 'react';

    // Crear el contexto para el tema
    export const TemaContext = createContext();

    export const TemaProvider = ({ children }) => {
    // Estado para manejar el tema (claro u oscuro)
    const [tema, setTema] = useState('claro');

    // Función para alternar entre el tema claro y oscuro
    const toggleTema = () => {
        setTema((prevTema) => (prevTema === 'claro' ? 'oscuro' : 'claro'));
    };

    return (
        <TemaContext.Provider value={{ tema, toggleTema }}>
        {children}
        </TemaContext.Provider>
    );
    };
