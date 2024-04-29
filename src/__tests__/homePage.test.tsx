import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home />);
    expect(screen.getByText('real-time-price-tracker')).toBeInTheDocument();
  });
});