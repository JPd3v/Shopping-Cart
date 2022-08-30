import { useEffect, useState } from 'react';
import ShopListItem from './ShopListItem';

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

  const itemsElements = items.map((item) => (
    <div key={item.id} className="item">
      <ShopListItem item={item} />
    </div>
  ));
  return <div>{itemsElements}</div>;
}
