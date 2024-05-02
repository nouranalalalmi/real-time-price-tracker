import { setPriceFromTickerData } from '../setPriceFromTickerData';
const setPrices = jest.fn();

describe('setPriceFromTickerData', () => {
  it('should set prices with the correct data', () => {
    const data = {
      s: 'BTCUSDT',
      p: '200.00',
      P: '4.00',
      c: '5000.00',
    };

    setPriceFromTickerData(data, setPrices);

    expect(setPrices).toHaveBeenCalledWith({
      [data.s]: {
        priceChange: data.p,
        priceChangePercent: data.P,
        lastPrice: data.c,
      },
    });
  });
});
