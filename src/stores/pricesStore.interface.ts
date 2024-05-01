type Price = {
  [key: string]: {
    lastPrice: string;
    priceChange: string;
    priceChangePercent: string;
  };
};

export interface PricesStoreInterface {
  prices: Price;
  setPrices: (price: Price) => void;
}
