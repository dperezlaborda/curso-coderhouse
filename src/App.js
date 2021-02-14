import React from 'react';
import CartProvider from './context/CartContext';
import NavBar2 from './components/NavBar2';
//import Home from './sections/Home';
//import Contact from './sections/Contact';
//import Info from './sections/Info';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <CartProvider>  {/*Envuelve todo para poder usar el contexto */}
        <BrowserRouter>
          <NavBar2 />
            <Switch>
              <Route exact path="/" component={ItemListContainer} />
              <Route exact path="/categories/:category" component={ItemListContainer} />
              <Route exact path="/product/:id" component={ItemDetailContainer}/>
              <Route exact path="/cart" component={Cart}/>
            </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
