import { useState } from 'react';
import useWebSocket from 'react-use-websocket';

import { CONNECTION_STATUS, COINS } from '@/constants';
import { usePriceStore } from '@/stores/pricesStore';

import { sendPongMessage } from './sendPongMessage';
import { setPriceFromTickerData } from './setPriceFromTickerData';

export const useBinanceWebSocket = () => {
  const [error, setError] = useState<null | string>(null);
  const setPrices = usePriceStore(state => state.setPrices);

  const { sendMessage, readyState } = useWebSocket('wss://stream.binance.com:443/ws', {
    shouldReconnect: () => true,
    onError: error => {
      setError(`Failed to establish connection: ${error.type}`);
    },
    onOpen: () => {
      setError(null);
      sendMessage(
        JSON.stringify({
          method: 'SUBSCRIBE',
          params: COINS.map(coin => `${coin.tickerId}@ticker`),
          id: 1,
        })
      );
    },
    onMessage: message => {
      const data = JSON.parse(message.data);

      if (data.e === 'ping') {
        sendPongMessage(data.id, sendMessage);
      } else if (data.e === '24hrTicker') {
        setPriceFromTickerData(data, setPrices);
      }
    },
  });

  const connectionStatus = CONNECTION_STATUS[readyState];

  return { connectionStatus, error };
};
