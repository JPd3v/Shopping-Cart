import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import Cart from './Cart';

export default function Header({
  items,
  incrementItemQuantity,
  decrementItemQuantity,
}) {
  const [showCart, setShowCart] = useState(false);

  function openCartModal() {
    setShowCart(true);
  }

  function closeCartModal() {
    setShowCart(false);
  }

  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <button
        type="button"
        className="button-open-cart"
        onClick={openCartModal}
      >
        {' '}
        <TiShoppingCart />
      </button>
      {showCart && (
        <Cart
          items={items}
          incrementItemQuantity={(id) => incrementItemQuantity(id)}
          decrementItemQuantity={(id) => decrementItemQuantity(id)}
          closeCartModal={() => closeCartModal()}
        />
      )}
    </nav>
  );
}
