import { IoCloseOutline } from 'react-icons/io5';

export default function CartItem({
  item,
  incrementItemQuantity,
  decrementItemQuantity,
}) {
  function handleIncrement(id) {
    console.log(id);
    incrementItemQuantity(id);
  }
  function handleDecrement(id, Currentquantity) {
    if (Currentquantity <= 1) return;
    decrementItemQuantity(id);
  }

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-information">
        <p>{item.title}</p>
        <p>${item.price}</p>
        <div className="cart-item-quantity-controller">
          <button
            type="button"
            onClick={() => handleDecrement(item.id, item.itemQuantity)}
          >
            -
          </button>
          <div>{item.itemQuantity}</div>
          <button type="button" onClick={() => handleIncrement(item.id)}>
            +
          </button>
        </div>
      </div>
      <button type="button" className="cart-item-delete-button">
        <IoCloseOutline />
      </button>
    </div>
  );
}
