import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Test', () => {
  const items = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakedatafortesting.jpg',
    },
  ];

  beforeEach(async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Header items={items} />
        </BrowserRouter>
      );
    });
  });

  test('should open cart modal when button open cart is clicked', async () => {
    const buttonOpenCart = screen.getByRole('button', { name: 'open-cart' });

    await userEvent.click(buttonOpenCart);

    const buttonProcedToPay = screen.getByRole('button', {
      name: 'Proceed to pay',
    });
    expect(buttonProcedToPay).toBeInTheDocument();
  });

  test('should close the cart modal  when button close cart is clicked', async () => {
    const buttonOpenCart = screen.getByRole('button', { name: 'open-cart' });

    await userEvent.click(buttonOpenCart);

    const buttonCloseCart = screen.getByRole('button', { name: 'close-cart' });
    expect(buttonCloseCart).toBeInTheDocument();

    await userEvent.click(buttonCloseCart);

    expect(buttonCloseCart).not.toBeInTheDocument();
  });
});
