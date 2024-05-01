export interface AssetDetails {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export enum IntervalEnum {
  MINUTE_1 = 'm1',
  MINUTE_5 = 'm5',
  MINUTE_15 = 'm15',
  MINUTE_30 = 'm30',
  HOUR_1 = 'h1',
  HOUR_2 = 'h2',
  HOUR_6 = 'h6',
  HOUR_12 = 'h12',
  DAY_1 = 'd1',
}
