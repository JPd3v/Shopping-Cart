/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ItemDetails() {
  const [item, setItem] = useState(null);

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
        </div>
      )}
    </div>
  );
}
