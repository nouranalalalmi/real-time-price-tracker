import { render, screen } from '@testing-library/react';

import { PriceChangeIndicator } from '../PriceChangeIndicator';

describe('PriceChangeIndicator', () => {
  it('should render the indicator with positive percent', () => {
    render(<PriceChangeIndicator percent={10} />);

    const indicator = screen.getByText('10.00%');
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass('bg-green-100 text-green-500');
  });

  it('should render the indicator with negative percent', () => {
    render(<PriceChangeIndicator percent={-10} />);

    const indicator = screen.getByText('-10.00%');
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass('bg-red-100 text-red-500');
  });
});
