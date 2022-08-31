import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import Cart from './Cart';

export default function Header({
  items,
  incrementItemQuantity,
  decrementItemQuantity,
}) {
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <TiShoppingCart />
      <Cart
        items={items}
        incrementItemQuantity={(id) => incrementItemQuantity(id)}
        decrementItemQuantity={(id) => decrementItemQuantity(id)}
      />
    </nav>
  );
}
