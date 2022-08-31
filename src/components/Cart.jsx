import CartItem from './CartItem';

export default function Cart({
  items,
  incrementItemQuantity,
  decrementItemQuantity,
}) {
  const reducer = items.reduce(
    (acc, item) =>
      Math.round(acc * 100) / 100 + Number(item.price * item.itemQuantity),
    0
  );
  return (
    <div>
      <div>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            incrementItemQuantity={(id) => incrementItemQuantity(id)}
            decrementItemQuantity={(id) => decrementItemQuantity(id)}
          />
        ))}
      </div>
      <div>${Math.round(reducer * 100) / 100}</div>
    </div>
  );
}
