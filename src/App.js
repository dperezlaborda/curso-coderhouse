import React from 'react';
import NavBar2 from './components/NavBar2';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar2 />
      <ItemListContainer greeting="Hola Dolores" name="Dolores" />
    </div>
  );
}

export default App;
