import React from 'react';
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
      <BrowserRouter>
        <NavBar2 />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
              <ItemListContainer />
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
    </div>
  );
}

export default App;
