import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { COINS } from '@/constants';

import { AssetPriceResponse } from './types/home';

export const useGetAssetPrice = () => {
  return useQuery<AssetPriceResponse[], Error>({
    queryKey: ['initPrices'],
    queryFn: async () => {
      const data = await axios.request({
        method: 'GET',
        url: 'https://data-api.binance.vision/api/v3/ticker/24hr',
        params: {
          symbols: JSON.stringify(COINS.map(coin => coin.tickerId.toUpperCase())),
        },
      });

      return data.data;
    },
  });
};
