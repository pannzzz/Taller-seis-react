import React from 'react';
import { TemaProvider } from './TemaContext'; // Importamos el proveedor de tema
import TemaSwitcher from './TemaSwitcher'; // Importamos el componente TemaSwitcher

function App() {
  return (
    <TemaProvider>
      <TemaSwitcher />
    </TemaProvider>
  );
}

export default App;
