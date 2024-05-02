import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import { useGetAssetDetails } from '@/services/details';

import { Overview } from '../Overview';

jest.mock('@/services/details');

describe('Overview', () => {
  beforeEach(() => {
    mockRouter.push({ pathname: '/:id', query: { id: 'bitcoin' } });
  });

  it('should render the spinner when data is loading', () => {
    (useGetAssetDetails as jest.Mock).mockReturnValueOnce({ isLoading: true });
    render(<Overview />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render the asset details when data is loaded', () => {
    const { container } = render(<Overview />);

    expect(container).toMatchSnapshot();
  });

  it('should render no data found message when there is no data', () => {
    (useGetAssetDetails as jest.Mock).mockReturnValue({
      isLoading: false,
      data: null,
    });
    render(<Overview />);

    expect(screen.getByText('No data found for bitcoin')).toBeInTheDocument();
  });
});
