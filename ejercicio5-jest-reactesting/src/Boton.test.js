    import React from 'react';
    import { render, screen, fireEvent } from '@testing-library/react';
    import '@testing-library/jest-dom'; 
    import Boton from './Boton';

    test('El botón muestra el texto "Hacer clic aquí" inicialmente', () => {
    render(<Boton />);
    
    expect(screen.getByText('Hacer clic aquí')).toBeInTheDocument();
    });

    test('El texto cambia a "¡Gracias por hacer clic!" cuando se hace clic en el botón', () => {
    render(<Boton />);
    
    const boton = screen.getByText('Hacer clic aquí');
    
    fireEvent.click(boton);
    
    expect(screen.getByText('¡Gracias por hacer clic!')).toBeInTheDocument();
    });
