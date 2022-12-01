import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home Test', () => {
  test('should render heading content ', () => {
    render(<Home />);

    const HeadingContent = screen.getByRole('heading', { name: /FAKE SHOP/i });

    expect(HeadingContent).toBeInTheDocument();
  });
});
