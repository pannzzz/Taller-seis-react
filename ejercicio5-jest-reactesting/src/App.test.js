import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App'; 

test('El botón muestra el texto "Hacer clic aquí" inicialmente', () => {
  render(<App />);
  
  expect(screen.getByText('Hacer clic aquí')).toBeInTheDocument();
});

test('El texto cambia a "¡Gracias por hacer clic!" cuando se hace clic en el botón', () => {
  render(<App />);
  
  const boton = screen.getByText('Hacer clic aquí');
  
  fireEvent.click(boton);
  
  expect(screen.getByText('¡Gracias por hacer clic!')).toBeInTheDocument();
});
