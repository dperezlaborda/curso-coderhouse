import React, { useState, useEffect } from 'react';
import CartProvider from './context/CartContext';
import NavBar2 from './components/NavBar2';
import Home from './sections/Home';
import Contact from './sections/Contact';
import Info from './sections/Info';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getFirestore } from "./firebaseConfig";


function App() {


  return (
    <div className="App">
      <CartProvider>  {/*Envuelve todo para poder usar el contexto */}
        <BrowserRouter>
          <NavBar2 />
          <main>
            <Switch>
              {/* <Route exact path="/">
                <Home />
              </Route> */}
              <Route path="/">  {/*se separan x categorias*/}
                <ItemListContainer />
              </Route>
              <Route path="/category/:id">  {/*se separan x categorias*/}
                <ItemListContainer  />
              </Route>
              <Route exact path="/cart">
                <Cart />
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
