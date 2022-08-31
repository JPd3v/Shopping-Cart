import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import Cart from './Cart';

export default function Header({ items }) {
  console.log(items);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <TiShoppingCart />
      <Cart />
    </div>
  );
}
