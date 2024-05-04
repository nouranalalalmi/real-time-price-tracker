import { ReadyState } from 'react-use-websocket';

import { RangeEnum } from './services/types/details';

export const COINS = [
  {
    id: 'bitcoin',
    tickerId: 'btcusdt',
    symbol: 'btc',
    name: 'Bitcoin',
    logo: 'images/btc.png',
  },
  {
    id: 'ethereum',
    tickerId: 'ethusdt',
    symbol: 'eth',
    name: 'Ethereum',
    logo: 'images/eth.png',
  },
  {
    id: 'solana',
    tickerId: 'solusdt',
    symbol: 'sol',
    name: 'Solana',
    logo: 'images/sol.png',
  },
  {
    id: 'cardano',
    tickerId: 'adausdt',
    symbol: 'ada',
    name: 'Cardano',
    ticker: '@ticker',
    logo: 'images/ada.png',
  },
];

export const RANGE_INTERVAL_MAP = {
  [RangeEnum.DAY]: { interval: 'h1', dateRange: 24 },
  [RangeEnum.WEEK]: { interval: 'h6', dateRange: 168 },
  [RangeEnum.MONTH]: { interval: 'h12', dateRange: 210 },
  [RangeEnum.YEAR]: { interval: 'd1', dateRange: 2520 },
};

export const CONNECTION_STATUS = {
  [ReadyState.CONNECTING]: 'Connecting',
  [ReadyState.OPEN]: 'Open',
  [ReadyState.CLOSING]: 'Closing',
  [ReadyState.CLOSED]: 'Closed',
  [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
};

export const CHART_COLORS = {
  GREEN: 'rgba(34,197,94)',
  RED: 'rgba(239,68, 68)',
  TRANSPARENT_GREEN: 'rgba(34,197,94, 0.1)',
  TRANSPARENT_RED: 'rgba(239,68, 68, 0.1)',
};
