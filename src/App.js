import React from 'react';
//contexto
import CartProvider from './context/CartContext';
import FirebaseProvider  from './context/FirebaseContext';
//components
import NavBar2 from './components/NavBar2';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
//router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <CartProvider>  {/*Envuelve todo para poder usar el contexto */}
      <FirebaseProvider>
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
        </FirebaseProvider>
      </CartProvider>
    </div>
  );
}

export default App;
