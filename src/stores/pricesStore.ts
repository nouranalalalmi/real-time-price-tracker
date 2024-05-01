import { create } from 'zustand';
import { PricesStoreInterface } from './pricesStore.interface';

export const usePriceStore = create<PricesStoreInterface>(set => ({
  prices: {},
  setPrices: newPrices =>
    set(state => ({
      prices: {
        ...state.prices,
        ...newPrices,
      },
    })),
}));
