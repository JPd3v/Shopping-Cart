import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function CartItem({
  item,
  incrementItemQuantity,
  decrementItemQuantity,
  deleteItemFromCart,
}) {
  function handleIncrement(id) {
    incrementItemQuantity(id);
  }
  function handleDecrement(id, Currentquantity) {
    if (Currentquantity <= 1) return;
    decrementItemQuantity(id);
  }

  function handleItemDelete(id) {
    deleteItemFromCart(id);
  }

  return (
    <li className="cart-item" data-testid="cart-item">
      <img src={item.image} alt="" />
      <div className="cart-item-information">
        <Link data-testid="list-item" to={`/shop/${item.id}`}>
          {item.title}
        </Link>
        <p>${item.price}</p>
        <div className="cart-item-quantity-controller">
          <button
            type="button"
            onClick={() => handleDecrement(item.id, item.itemQuantity)}
            aria-label="Decrement item quantity"
          >
            -
          </button>
          <p aria-live="assertive">{item.itemQuantity}</p>
          <button
            type="button"
            onClick={() => handleIncrement(item.id)}
            aria-label="Increment item quantity"
          >
            +
          </button>
        </div>
      </div>
      <button
        aria-label="delete-item"
        type="button"
        className="cart-item-delete-button"
        onClick={() => handleItemDelete(item.id)}
      >
        <IoCloseOutline />
      </button>
    </li>
  );
}
