import React from 'react';
import CartProvider from './context/CartContext';
import NavBar2 from './components/NavBar2';
import Home from './sections/Home';
import Contact from './sections/Contact';
import Info from './sections/Info';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <CartProvider>  {/*Envuelve todo para poder usar el contexto */}
        <BrowserRouter>
          <NavBar2 />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/category/:id">  {/*se separan x categorias*/}
                <ItemListContainer />
              </Route>
              <Route path="/product/:id">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/info">
                <Info />
              </Route>
              <Route exact path="/contacto">
                <Contact />
              </Route>
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
