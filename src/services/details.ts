import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';

import { RangeIntervalMap } from '@/constants';

import { AssetDetails, AssetHistory, GetAssetHistoryPayload, RangeEnum } from './types/details';

export const useGetAssetDetails = (asset: string) => {
  return useQuery<AssetDetails, Error>({
    queryKey: ['details', asset],
    queryFn: async () => {
      const data = await axios.get(`https://api.coincap.io/v2/assets/${asset}`);
      return data.data.data;
    },
    enabled: !!asset,
    // Refetch the data three minutes
    refetchInterval: 60 * 3000,
  });
};

export const useGetAssetHistory = ({ asset, range = RangeEnum.DAY }: GetAssetHistoryPayload) => {
  return useQuery<AssetHistory[], Error>({
    queryKey: ['history', asset, range],
    queryFn: async () => {
      const data = await axios.request({
        method: 'GET',
        url: `https://api.coincap.io/v2/assets/${asset}/history`,
        params: {
          interval: RangeIntervalMap[range].interval,
          // Subtract the number of days specified by the current selection from the current date
          // and set the time to the start of the day to get the start date
          start: dayjs().subtract(RangeIntervalMap[range].dateRange, 'hours').valueOf(),
          // Set the end date to the end of the current day
          end: dayjs().endOf('day').valueOf(),
        },
      });
      return data.data.data;
    },
    enabled: !!asset,
    refetchOnWindowFocus: false,
    // Refetch the data every three minutes
    refetchInterval: 60 * 3000,
  });
};
