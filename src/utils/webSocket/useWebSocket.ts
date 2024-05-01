import { useEffect } from 'react';

import { COINS } from '@/constants';
import { usePriceStore } from '@/stores/pricesStore';

export const useWebSocket = () => {
  const setPrices = usePriceStore(state => state.setPrices);

  useEffect(() => {
    const socket = new WebSocket('wss://stream.binance.com:443/ws');

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          method: 'SUBSCRIBE',
          params: COINS.map(coin => `${coin.tickerId}@ticker`),
          id: 1,
        })
      );
    };

    socket.onmessage = event => {
      const data = JSON.parse(event.data);

      if (data.event === 'ping') {
        console.log('a ping happened', data);

        socket.send(
          JSON.stringify({
            method: 'pong',
            params: [],
            id: data.id,
          })
        );
      } else {
        const { s: symbol, p: priceChange, P: priceChangePercent, c: lastPrice } = data;
        setPrices({
          [symbol]: {
            priceChange,
            priceChangePercent,
            lastPrice,
          },
        });
      }
    };

    socket.onerror = error => {
      console.error('WebSocket error', error);
    };

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      console.log('close connection');

      socket.close();
    };
  }, [setPrices]);
};
