import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { AssetDetails, IntervalEnum } from './types/details';

export const useGetAssetDetails = (asset: string) => {
  return useQuery<AssetDetails, Error>({
    queryKey: ['details', asset],
    queryFn: async () => {
      const data = await axios.get(`https://api.coincap.io/v2/assets/${asset}`);
      return data.data.data;
    },
    enabled: !!asset,
  });
};

// add start & end	optional	1528470720000 unix

export const useGetAssetHistory = (asset: string, interval = IntervalEnum.DAY_1) => {
  return useQuery<any, Error>({
    queryKey: ['history', asset, interval],
    queryFn: async () => {
      // const data = await axios.get(
      //   `https://api.coincap.io/v2/assets/${asset}/history?interval=${interval}`,
      // );
      const start = new Date();
      start.setDate(start.getDate() - 30);
      start.setHours(0, 0, 0, 0);
      const end = new Date();
      end.setHours(23, 59, 59, 999);

      const data = await axios.request({
        method: 'GET',
        url: `https://api.coincap.io/v2/assets/${asset}/history`,
        params: { interval: interval, start: start.getTime(), end: end.getTime() },
      });
      console.log(data);

      return data.data.data;
    },
    enabled: !!asset,
  });
};
