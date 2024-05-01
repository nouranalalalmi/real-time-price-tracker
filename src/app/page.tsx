'use client';
import { useEffect } from 'react';

import { Table } from '@/components/home/table/Table';
import { useWebSocket } from '@/utils/webSocket/useWebSocket';
import { useGetAssetPrice } from '@/services/home';
import { usePriceStore } from '@/stores/pricesStore';

export default function Home() {
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

  return <Table />;
}
