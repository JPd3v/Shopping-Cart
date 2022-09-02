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

  function deleteItemFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  // function changeItemQuantity(item) {
  //   console.log(item);
  //   return setCartItems((prevItems) =>
  //     prevItems.map((element) =>
  //       element.id === item.id
  //         ? {
  //             ...element,
  //             itemQuantity: item.itemQuantity,
  //           }
  //         : element
  //     )
  //   );
  // }

  function incrementItemQuantity(id) {
    console.log('asdsadsa');
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

  // import { useState, } from 'react';

  // export default function CartItem({ item,}) {
  //   const [input, setInput] = useState({ quantity: item.itemQuantity });

  //   function handleChange(event) {
  //     const { name, value } = event.target;

  //     console.log(input.quantity);
  //     setInput((prevInput) => ({ ...prevInput, [name]: value }));
  //   }

  //   function handleFormChange() {
  //     console.log('asd');
  //   }
  // changeItemQuantity({ id: item.id, itemQuantity: input.quantity })
  // useEffect(() => setInput({ quantity: item.itemQuantity }), [item]);

  //   return (
  //     <div className="cart">
  //       <img src={item.image} alt={item.title} />
  //       <p>{item.title}</p>
  //       <p>${item.price}</p>
  //       <form onChange={handleFormChange()}>
  //         <input
  //           type="number"
  //           value={input.quantity}
  //           name="quantity"
  //           onChange={(event) => handleChange(event)}
  //         />
  //       </form>
  //     </div>
  //   );
  // }

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
