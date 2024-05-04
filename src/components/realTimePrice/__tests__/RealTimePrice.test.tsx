import { render } from '@testing-library/react';

import { COINS } from '@/constants';
import { mockStore } from '@/stores/__mocks__/mockStore';
import { usePriceStore } from '@/stores/pricesStore';

import { RealTimePrice } from '../RealTimePrice';

jest.mock('@/services/home');
mockStore('@/stores/pricesStore');

describe('RealTimePrice', () => {
  const mockPrices = {
    ADAUSDT: {
      lastPrice: '0.45400000',
      priceChange: '0.01690000',
      priceChangePercent: '3.866',
    },
    BTCUSDT: {
      lastPrice: '58578.39000000',
      priceChange: '1154.47000000',
      priceChangePercent: '2.010',
    },
    ETHUSDT: {
      lastPrice: '2971.99000000',
      priceChange: '77.99000000',
      priceChangePercent: '2.695',
    },
    SOLUSDT: {
      lastPrice: '136.43000000',
      priceChange: '13.67000000',
      priceChangePercent: '11.136',
    },
  };

  beforeEach(() => {
    usePriceStore.setState({
      prices: mockPrices,
    });
  });

  it.each(COINS.map(c => c.id))('renders correctly for %s', id => {
    const { container } = render(<RealTimePrice id={id} />);

    expect(container).toMatchSnapshot();
  });
});
