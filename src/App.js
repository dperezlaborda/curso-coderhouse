import React, { useEffect, useState } from 'react';
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
import { firestore } from './firebaseConfig';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {  //se llama a firebase mediante la promesa
    const db = firestore
    const collection = db.collection("items");
    const query = collection.get()

    query.then((res) => {
      //const items = res.docs  hace referencia a una clase llamada docs de firestore
      setProducts(res.docs.map(product => (
        { id: product.id, ...product.data() }
      )))
      products.forEach(product => {
        //console.log(item.id)  IMPORTANTE: el id esta separado de la data

        const producto_final = {
          id: product.id,
          ...product.data()  //desamaria lo que hay adentro del objeto
        }

        //setProducts([...productos, producto_final])
        console.log(producto_final)

      })
    })
      .catch(() => {
        console.log("fallo")
      })

  })

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
