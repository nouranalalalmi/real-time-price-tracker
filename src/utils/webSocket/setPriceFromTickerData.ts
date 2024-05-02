export const setPriceFromTickerData = (data: any, setPrices: Function) => {
  const { s: symbol, p: priceChange, P: priceChangePercent, c: lastPrice } = data;

  setPrices({
    [symbol]: {
      priceChange,
      priceChangePercent,
      lastPrice,
    },
  });
};
