type Price = {
  [key: string]: {
    lastPrice: string;
    priceChange: string;
    priceChangePercent: string;
  };
};

export interface PricesStoreInterface {
  prices: Price;
  /* eslint-disable no-unused-vars */
  setPrices: (price: Price) => void;
}
