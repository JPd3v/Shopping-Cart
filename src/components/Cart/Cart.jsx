import { IoCloseOutline } from 'react-icons/io5';
import FocusLock from 'react-focus-lock';
import CartItem from '../CartItem/CartItem';

export default function Cart({
  items,
  incrementItemQuantity,
  decrementItemQuantity,
  closeCartModal,
  deleteItemFromCart,
}) {
  const reducer = items.reduce(
    (acc, item) =>
      Math.round(acc * 100) / 100 + Number(item.price * item.itemQuantity),
    0
  );
  return (
    <FocusLock>
      <div className="cart-modal">
        <div className="cart">
          <button
            aria-label="close-cart"
            type="button"
            className="button-close-cart"
            onClick={closeCartModal}
          >
            <IoCloseOutline />
          </button>
          <ul className="cart-items-container">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                incrementItemQuantity={(id) => incrementItemQuantity(id)}
                decrementItemQuantity={(id) => decrementItemQuantity(id)}
                deleteItemFromCart={(id) => deleteItemFromCart(id)}
              />
            ))}
          </ul>
          <div className="cart-total-amount">
            <div>Total: ${Math.round(reducer * 100) / 100}</div>
            <button type="button" className="button-Proceed-to-pay">
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
    </FocusLock>
  );
}
