import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import ItemDetails from './ItemDetails';

let fakeItem = {
  title: 'watch',
  category: 'jewelery',
  description: 'a fake watch',
  price: '$55.99',
};

// global.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(fakeItem),
//   })
// );

beforeEach(() => {
  window.fetch = vi.fn(() => {
    fakeItem = {
      title: 'watch',
      category: 'jewelery',
      description: 'a fake watch',
      price: '55.99',
    };

    return Promise.resolve({
      json: () => Promise.resolve(fakeItem),
    });
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});
describe(
  'itemDetails tests',
  () =>
    test('should render item information ', async () => {
      await act(async () => {
        render(<ItemDetails />);
      });

      const itemTitle = screen.getByText(fakeItem.title);
      const itemcategory = screen.getByText(fakeItem.category);
      const itemdescription = screen.getByText(fakeItem.description);
      const itemprice = screen.getByText(`$${fakeItem.price}`);
      const quantityInput = screen.getByRole('spinbutton');
      const addTocartButton = screen.getByRole('button', {
        name: 'add to your cart',
      });

      expect(itemTitle).toBeInTheDocument();
      expect(itemcategory).toBeInTheDocument();
      expect(itemdescription).toBeInTheDocument();
      expect(itemprice).toBeInTheDocument();
      expect(quantityInput).toBeInTheDocument();
      expect(addTocartButton).toBeInTheDocument();
    }),

  test('change input value when user type', async () => {
    await act(async () => {
      render(<ItemDetails />);
    });

    const quantityInput = screen.getByRole('spinbutton');

    await userEvent.type(quantityInput, '23');

    expect(quantityInput.value).toBe('123');
  }),
  test('adds item to the car is called when button clicked', async () => {
    const addCartItem = vi.fn();

    await act(async () => {
      render(<ItemDetails addCartItem={addCartItem} />);
    });

    const addTocartButton = screen.getByText('add to your cart');

    await userEvent.click(addTocartButton);

    expect(addTocartButton).toBeInTheDocument();
    expect(addCartItem).toHaveBeenCalled();

    screen.debug();
  })
);
