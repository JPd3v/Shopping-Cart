import { Link } from 'react-router-dom';

export default function ShopListItem({ item }) {
  const { title, price, image, id } = item;
  return (
    <Link data-testid="list-item" to={`/shop/${id}`} aria-label={`${title}`}>
      <div className="list-item-img-container">
        <img src={image} alt="" />
      </div>
      <p className="shop-list-item-name">{title}</p>
      <p>{`$ ${price}`}</p>
    </Link>
  );
}
