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
    <div className="cart">
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <p>${item.price}</p>
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
  );
}
