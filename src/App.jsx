import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import ItemDetails from './components/ItemDetails/ItemDetails';

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

  function deleteItemFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function incrementItemQuantity(id) {
    setCartItems((prevItems) =>
      prevItems.map((element) =>
        element.id === id
          ? {
              ...element,
              itemQuantity: element.itemQuantity + 1,
            }
          : element
      )
    );
  }

  function decrementItemQuantity(id) {
    setCartItems((prevItems) =>
      prevItems.map((element) =>
        element.id === id
          ? {
              ...element,
              itemQuantity: element.itemQuantity - 1,
            }
          : element
      )
    );
  }

  return (
    <div className="App">
      <Header
        items={cartItems}
        incrementItemQuantity={(id) => incrementItemQuantity(id)}
        decrementItemQuantity={(id) => decrementItemQuantity(id)}
        deleteItemFromCart={(id) => deleteItemFromCart(id)}
      />
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
