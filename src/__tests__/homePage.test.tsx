import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home />);
    expect(screen.getByText('real-time-price-tracker')).toBeInTheDocument();
  });
});
