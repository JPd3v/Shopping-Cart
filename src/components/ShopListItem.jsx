export default function ShopListItem({ item }) {
  const { title, price, image } = item;
  return (
    <>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{`$ ${price}`}</p>
    </>
  );
}
