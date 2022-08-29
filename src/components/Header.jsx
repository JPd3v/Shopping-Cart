import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </div>
  );
}
