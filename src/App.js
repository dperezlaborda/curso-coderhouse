import React from 'react';
import NavBar2 from './components/NavBar2';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <NavBar2 />
      <Hero />
      <ItemListContainer greeting="Hola" name="Dolores" />
      <ItemDetailContainer />
      <Footer />
    </div>
  );
}

export default App;
