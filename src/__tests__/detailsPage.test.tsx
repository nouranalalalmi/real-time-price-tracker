import { render, screen } from '@testing-library/react';

import Details from '@/app/[id]/page';

describe('Details page', () => {
  it('renders correctly', () => {
    render(<Details />);
    expect(screen.getByText('real-time-price-tracker details')).toBeInTheDocument();
  });
});
