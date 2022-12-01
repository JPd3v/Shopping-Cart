import { useEffect, useState } from 'react';
import ShopListItem from '../ShopListItem/ShopListItem';

export default function Shop() {
  const [items, setItems] = useState([]);

  async function fetchItemsData() {
    const response = await fetch('https://fakestoreapi.com/products');
    const itemsData = await response.json();
    setItems(itemsData);
  }
  useEffect(() => {
    fetchItemsData();
  }, []);

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item">
            <ShopListItem item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
