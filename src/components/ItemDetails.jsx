/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ItemDetails({ addCartItem }) {
  const [item, setItem] = useState(null);
  const [input, setInput] = useState({ itemQuantity: '1' });
  const params = useParams();

  async function fetchItemData() {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const data = await response.json();

      setItem(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchItemData();
  }, []);

  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Number(input.itemQuantity) <= 0) return;
    const newItem = { ...item, itemQuantity: Number(input.itemQuantity) };

    addCartItem(newItem);
  }

  return (
    <div>
      {item && (
        <div>
          <div>
            <img src={item.image} alt={item.title} />
          </div>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.category}</div>
          <div>${item.price}</div>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              type="number"
              name="itemQuantity"
              min="1"
              value={input.itemQuantity}
              onChange={(event) => handleInput(event)}
            />
            <button type="submit">add to your cart</button>
          </form>
        </div>
      )}
    </div>
  );
}
