import { act, render, screen } from '@testing-library/react';
import Cart from './Cart';

const fakeItems = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    image: 'https://fakedatafortesting.jpg',
    itemQuantity: 1,
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    image: 'https://fakedatafortesting.jpg',
    itemQuantity: 2,
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    image: 'https://fakedatafortesting.jpg',
    itemQuantity: 3,
  },
];

describe('Cart Test', () => {
  test('should properly render cart items array provided', async () => {
    await act(async () => {
      render(<Cart items={fakeItems} />);
    });

    const cartItems = screen.getAllByTestId('cart-item');

    expect(cartItems.length).toBe(3);
  });

  test('should sum the total price of all cart items', async () => {
    await act(async () => {
      render(<Cart items={fakeItems} />);
    });

    const total = screen.getByText(/Total:/);

    expect(total.textContent).toBe(`Total: $322.52`);
  });
});
