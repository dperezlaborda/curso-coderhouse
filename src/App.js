import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola Dolores" name="Dolores" />
    </div>
  );
}

export default App;
