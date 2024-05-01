import { Coins } from '@/constants';

export interface AssetPriceInterface {
  asset: (typeof Coins)[number];
}
