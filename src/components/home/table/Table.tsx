'use client';

import { useEffect } from 'react';

import { Coins } from '@/constants';
import { useGetAssetPrice } from '@/services/home';
import { usePriceStore } from '@/stores/pricesStore';
import { useWebSocket } from '@/utils/webSocket/useWebSocket';

import { Row } from './Row';

export const Table = () => {
  useWebSocket();
  const { data, isLoading } = useGetAssetPrice();
  const setPrices = usePriceStore(state => state.setPrices);

  useEffect(() => {
    if (!isLoading && data) {
      data.map(asset => {
        setPrices({
          [asset.symbol]: {
            priceChange: asset.priceChange,
            priceChangePercent: asset.priceChangePercent,
            lastPrice: asset.lastPrice,
          },
        });
      });
    }
  }, [isLoading]);

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <table className="w-full table-fixed">
        <thead>
          <tr className="text-left">
            <th>Asset</th>
            <th>Price</th>
            <th>24hr change</th>
          </tr>
        </thead>
        <tbody>
          {Coins.map(coin => (
            <Row asset={coin} key={coin.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
