import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import Cart from './Cart';

export default function Header({
  items,
  incrementItemQuantity,
  decrementItemQuantity,
  deleteItemFromCart,
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
      <div className="header-left-side">
        <Link to="/">
          <h1>Fake Shop</h1>
        </Link>
      </div>
      <div className="header-right-side">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <button
          aria-label="open-cart"
          type="button"
          className="button-open-cart"
          onClick={openCartModal}
        >
          {' '}
          <TiShoppingCart />
        </button>
      </div>

      {showCart && (
        <Cart
          items={items}
          incrementItemQuantity={(id) => incrementItemQuantity(id)}
          decrementItemQuantity={(id) => decrementItemQuantity(id)}
          deleteItemFromCart={(id) => deleteItemFromCart(id)}
          closeCartModal={() => closeCartModal()}
        />
      )}
    </nav>
  );
}
