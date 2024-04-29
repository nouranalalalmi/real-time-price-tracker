import Details from '@/app/[id]/page';
import { render, screen } from '@testing-library/react';

describe('Details page', () => {
  it('renders correctly', () => {
    render(<Details />);
    expect(screen.getByText('real-time-price-tracker details')).toBeInTheDocument();
  });
});