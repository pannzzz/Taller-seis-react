import React from 'react';
import { TemaProvider } from './TemaContext'; 
import TemaSwitcher from './TemaSwitcher'; 

function App() {
  return (
    <TemaProvider>
      <TemaSwitcher />
    </TemaProvider>
  );
}

export default App;
