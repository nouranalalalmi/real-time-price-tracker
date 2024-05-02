'use client';
import { useBinanceWebSocket } from '@/utils/webSocket/useBinanceWebSocket';

export const WebSocketStatus = () => {
  const { connectionStatus, error } = useBinanceWebSocket();

  return (
    <div className="border bg-white p-1 text-center text-xs shadow-sm">
      <p className=" font-semibold">Web socket status: {connectionStatus}</p>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};
