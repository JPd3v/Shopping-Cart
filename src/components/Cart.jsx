import { IoCloseOutline } from 'react-icons/io5';
import CartItem from './CartItem';

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
    <div className="cart-modal">
      <div className="cart">
        <div className="cart-items-container">
          <button
            type="button"
            className="button-close-cart"
            onClick={closeCartModal}
          >
            <IoCloseOutline />
          </button>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              incrementItemQuantity={(id) => incrementItemQuantity(id)}
              decrementItemQuantity={(id) => decrementItemQuantity(id)}
              deleteItemFromCart={(id) => deleteItemFromCart(id)}
            />
          ))}
        </div>
        <div className="cart-total-amount">
          Total: ${Math.round(reducer * 100) / 100}
          <button type="button" className="button-Proceed-to-pay">
            Proceed to pay
          </button>
        </div>
      </div>
    </div>
  );
}
