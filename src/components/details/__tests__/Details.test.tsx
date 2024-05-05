import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import { mockStore } from '@/stores/__mocks__/mockStore';
import { usePriceStore } from '@/stores/pricesStore';

import { Details } from '../Details';

jest.mock('@/services/details');
mockStore('@/stores/pricesStore');
jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

describe('Details', () => {
  const mockPrices = {
    BTCUSDT: {
      lastPrice: '58578.39000000',
      priceChange: '1154.47000000',
      priceChangePercent: '2.010',
    },
  };

  beforeAll(() => {
    usePriceStore.setState({ prices: mockPrices });
  });

  beforeEach(() => {
    mockRouter.push({ pathname: '/:id', query: { id: 'bitcoin' } });
  });

  it('should match snapshot', () => {
    const { container } = render(<Details />);

    expect(container).toMatchSnapshot();
  });

  it('should render real time price', () => {
    render(<Details />);

    expect(screen.getByText('Real time price: $58,578.39')).toBeInTheDocument();
  });
});
