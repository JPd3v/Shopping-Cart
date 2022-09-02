/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

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
    <div className="item-details-wrapper">
      {item && (
        <div className="item-details">
          <div className="item-details-img-wrapper">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="item-details-information">
            <h6>{item.title}</h6>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <form onSubmit={(event) => handleSubmit(event)}>
              <input
                type="number"
                name="itemQuantity"
                min="1"
                value={input.itemQuantity}
                onChange={(event) => handleInput(event)}
              />
              <button type="submit" className="item-details-add-to-cart">
                add to your cart <MdAddShoppingCart />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
