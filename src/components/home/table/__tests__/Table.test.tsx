import { render } from '@testing-library/react';

import { mockStore } from '@/stores/__mocks__/mockStore';
import { usePriceStore } from '@/stores/pricesStore';

import { Table } from '../Table';

jest.mock('@/services/home');
mockStore('@/stores/pricesStore');

describe('Table', () => {
  it('should match snapshot', () => {
    const { container } = render(<Table />);
    expect(container).toMatchSnapshot();
  });

  it('should set prices', () => {
    render(<Table />);
    expect(usePriceStore.getState().prices).toEqual({
      ADAUSDT: {
        lastPrice: '0.45400000',
        priceChangePercent: '3.866',
      },
      BTCUSDT: {
        lastPrice: '58578.39000000',
        priceChangePercent: '2.010',
      },
      ETHUSDT: {
        lastPrice: '2971.99000000',
        priceChangePercent: '2.695',
      },
      SOLUSDT: {
        lastPrice: '136.43000000',
        priceChangePercent: '11.136',
      },
    });
  });
});
