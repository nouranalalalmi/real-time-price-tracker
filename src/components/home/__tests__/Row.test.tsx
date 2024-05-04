import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import { mockStore } from '@/stores/__mocks__/mockStore';
import { usePriceStore } from '@/stores/pricesStore';

import { Row } from '../Row';

mockStore('@/stores/pricesStore');

describe('Row', () => {
  const mockAsset = {
    id: 'bitcoin',
    tickerId: 'btcusdt',
    logo: '/logo.png',
    name: 'Bitcoin',
    symbol: 'BTC',
  };

  beforeEach(() => {
    usePriceStore.setState({
      prices: {
        BTCUSDT: {
          lastPrice: '50000',
          priceChange: '250',
          priceChangePercent: '5',
        },
      },
    });
  });

  it('should match snapshot', () => {
    const { container } = render(<Row asset={mockAsset} />);
    expect(container).toMatchSnapshot();
  });

  it('should display asset information and price', () => {
    render(<Row asset={mockAsset} />);

    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('$250.00')).toBeInTheDocument();
    expect(screen.getByText('$50,000.00')).toBeInTheDocument();
    expect(screen.getByText('5.00%')).toBeInTheDocument();
  });

  it('should navigate to asset page when row is clicked', () => {
    render(<Row asset={mockAsset} />);

    screen.getByText('BTC').click();
    expect(mockRouter).toMatchObject({ pathname: '/details/bitcoin' });
  });
});
