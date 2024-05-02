import { COINS } from '@/constants';

export interface AssetPriceInterface {
  asset: (typeof COINS)[number];
}
