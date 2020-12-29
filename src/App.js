import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';

function App() {

  const [counter, setCounter] = useState(1);

  const addProduct = () => {
    setCounter(counter + 1);
  }

  const removeProduct = () => {
    if (counter !== 1) {
      setCounter(counter - 1)
    } else {
      console.log("no se puede")
    }
  }

  return (
    <div className="App">
      <NavBar />
      <ItemCount
        counter={counter}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </div>
  );
}

export default App;
