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

export interface AssetHistory {
  priceUsd: string;
  time: number;
  circulatingSupply: string;
  date: string;
}

export interface GetAssetHistoryPayload {
  asset: string;
  range: RangeEnum;
}

export enum RangeEnum {
  DAY = '1d',
  WEEK = '1w',
  MONTH = '1m',
  YEAR = '1y',
}
