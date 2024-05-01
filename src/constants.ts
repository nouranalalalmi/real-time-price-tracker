import { RangeEnum } from './services/types/details';

export const Coins = [
  {
    id: 'bitcoin',
    tickerId: 'btcusdt',
    symbol: 'btc',
    name: 'Bitcoin',
    logo: '/images/btc.png',
  },
  {
    id: 'ethereum',
    tickerId: 'ethusdt',
    symbol: 'eth',
    name: 'Ethereum',
    logo: '/images/eth.png',
  },
  {
    id: 'solana',
    tickerId: 'solusdt',
    symbol: 'sol',
    name: 'Solana',
    logo: '/images/sol.png',
  },
  {
    id: 'cardano',
    tickerId: 'adausdt',
    symbol: 'ada',
    name: 'Cardano',
    ticker: '@ticker',
    logo: '/images/ada.png',
  },
];

export const RangeIntervalMap = {
  [RangeEnum.DAY]: { interval: 'h1', dateRange: 24 },
  [RangeEnum.WEEK]: { interval: 'h6', dateRange: 168 },
  [RangeEnum.MONTH]: { interval: 'h12', dateRange: 210 },
  [RangeEnum.YEAR]: { interval: 'd1', dateRange: 2520 },
};
