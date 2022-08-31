import { Link } from 'react-router-dom';

export default function ShopListItem({ item }) {
  const { title, price, image, id } = item;
  return (
    <Link to={`/shop/${id}`}>
      <img src={image} alt={title} />

      <p className="shop-list-item-name">{title}</p>
      <p>{`$ ${price}`}</p>
    </Link>
  );
}
