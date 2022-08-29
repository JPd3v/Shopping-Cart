import { useEffect, useState } from 'react';
import ShopListItem from './ShopListItem';

export default function Shop() {
  const [items, setItems] = useState([]);

  async function fetchData() {
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    setItems(result);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const itemsElements = items.map((item) => (
    <div key={item.id} className="item">
      <ShopListItem item={item} />
    </div>
  ));
  return <div>{itemsElements}</div>;
}
