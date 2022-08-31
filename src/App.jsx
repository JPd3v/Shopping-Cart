import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import ItemDetails from './components/ItemDetails';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addCartItem(item) {
    const findRepeatedItem = cartItems.findIndex(
      (element) => item.id === element.id
    );
    // if the item doesn't exist in the array then add it
    if (findRepeatedItem === -1) {
      return setCartItems((prevItems) => [...prevItems, item]);
    }
    // if the item already exists in the array  sums the previous quantity + the current quantity
    return setCartItems((prevItems) =>
      prevItems.map((element, index) =>
        index === findRepeatedItem
          ? {
              ...element,
              itemQuantity: element.itemQuantity + item.itemQuantity,
            }
          : element
      )
    );
  }

  return (
    <div className="App">
      <Header items={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route
            path=":id"
            element={<ItemDetails addCartItem={(data) => addCartItem(data)} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
