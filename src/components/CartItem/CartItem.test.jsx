import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, vi } from 'vitest';
import CartItem from './CartItem';

const fakeItem = {
  id: 3,
  title: 'Mens Cotton Jacket',
  itemQuantity: 2,
  price: 55.99,
  description:
    'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
  category: "men's clothing",
  image: 'https://fakedatafortesting.jpg',
};

const fakeItemWithOneQuanity = { ...fakeItem, itemQuantity: 1 };

const incrementItemQuantity = vi.fn();
const decrementItemQuantity = vi.fn();
const deleteItemFromCart = vi.fn();

describe('CartItem Test', () => {
  test("shouldn't call decrementItemQuantity if itemQuantity is equal to 1", async () => {
    render(
      <CartItem
        item={fakeItemWithOneQuanity}
        incrementItemQuantity={(id) => incrementItemQuantity(id)}
        decrementItemQuantity={(id) => decrementItemQuantity(id)}
        deleteItemFromCart={(id) => deleteItemFromCart(id)}
      />
    );

    const buttonDecrement = screen.getByRole('button', { name: '-' });
    await userEvent.click(buttonDecrement);

    expect(decrementItemQuantity).not.toBeCalled();
  });

  test('should call incrementItemQuantity with item id when button is clicked', async () => {
    render(
      <CartItem
        item={fakeItem}
        incrementItemQuantity={(id) => incrementItemQuantity(id)}
        decrementItemQuantity={(id) => decrementItemQuantity(id)}
        deleteItemFromCart={(id) => deleteItemFromCart(id)}
      />
    );
    const incrementButton = screen.getByRole('button', { name: '+' });
    await userEvent.click(incrementButton);
    expect(incrementItemQuantity).toHaveBeenCalledWith(3);
  });

  test('should call decrementItemQuantity with item id when button is clicked', async () => {
    render(
      <CartItem
        item={fakeItem}
        incrementItemQuantity={(id) => incrementItemQuantity(id)}
        decrementItemQuantity={(id) => decrementItemQuantity(id)}
        deleteItemFromCart={(id) => deleteItemFromCart(id)}
      />
    );

    const buttonDecrement = screen.getByRole('button', { name: '-' });
    await userEvent.click(buttonDecrement);

    expect(decrementItemQuantity).toHaveBeenCalledWith(3);
  });

  test('should call delete deleteItemFromCart with item id when button is clicked ', async () => {
    render(
      <CartItem
        item={fakeItem}
        incrementItemQuantity={(id) => incrementItemQuantity(id)}
        decrementItemQuantity={(id) => decrementItemQuantity(id)}
        deleteItemFromCart={(id) => deleteItemFromCart(id)}
      />
    );
    const deleteButton = screen.getByRole('button', { name: 'delete-item' });

    await userEvent.click(deleteButton);

    expect(deleteItemFromCart).toHaveBeenCalledWith(3);
    screen.debug();
  });
});
