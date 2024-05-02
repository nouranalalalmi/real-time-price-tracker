import { render, screen } from '@testing-library/react';

import { FormattedNumber } from '../FormattedNumber';

describe('FormattedNumber', () => {
  it('should render the spinner when value is undefined', () => {
    render(<FormattedNumber value={undefined} />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('should render the formatted number when value with prefix and suffix', () => {
    render(<FormattedNumber value={1234.56} prefix="$" suffix=" USD" />);

    const formattedNumber = screen.getByText('$1,234.56 USD');
    expect(formattedNumber).toBeInTheDocument();
  });
});
