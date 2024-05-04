'use client';

import { useEffect } from 'react';

import { COINS } from '@/constants';
import { useGetAssetPrice } from '@/services/home';
import { usePriceStore } from '@/stores/pricesStore';

import { Row } from './Row';

export const Table = () => {
  const { data, isLoading } = useGetAssetPrice();
  const setPrices = usePriceStore(state => state.setPrices);

  useEffect(() => {
    if (!isLoading && data) {
      data?.map(asset => {
        setPrices({
          [asset.symbol]: {
            priceChangePercent: asset.priceChangePercent,
            priceChange: asset.priceChange,
            lastPrice: asset.lastPrice,
          },
        });
      });
    }
  }, [isLoading, data, setPrices]);

  return (
    <>
      <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
        {process.env.NODE_ENV}
        <a href="/hey">hey</a>
        <table className="w-full table-fixed">
          <thead>
            <tr className="text-left">
              <th>Asset</th>
              <th>Price</th>
              <th>Price change</th>
              <th>Percent change (%)</th>
            </tr>
          </thead>
          <tbody>
            {COINS.map(coin => (
              <Row asset={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
