import { act, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Shop from './Shop';

beforeEach(() => {
  window.fetch = vi.fn(() => {
    const fakeFetch = [
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakedatafortesting.jpg',
      },
      {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image: 'https://fakedatafortesting.jpg',
      },
      {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description:
          'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: "men's clothing",
        image: 'https://fakedatafortesting.jpg',
      },
    ];
    return Promise.resolve({
      json: () => Promise.resolve(fakeFetch),
    });
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Shop Test', () => {
  test('should correctly render the array of items fetched', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Shop />
        </BrowserRouter>
      );
    });
    const item = screen.getAllByTestId('list-item');
    expect(item.length).toEqual(3);

    screen.debug();
  });
});
