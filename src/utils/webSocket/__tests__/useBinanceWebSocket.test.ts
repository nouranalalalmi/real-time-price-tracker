import { act, renderHook } from '@testing-library/react';

import { COINS, CONNECTION_STATUS } from '@/constants';
import { mockStore } from '@/stores/__mocks__/mockStore';
import { usePriceStore } from '@/stores/pricesStore';

import { sendPongMessage } from '../sendPongMessage';
import { useBinanceWebSocket } from '../useBinanceWebSocket';

// mock functions
jest.mock('../sendPongMessage');

// mock react-use-websocket
jest.mock('react-use-websocket');

// mock zustand store
mockStore('@/stores/pricesStore');

describe('useBinanceWebSocket', () => {
  const mockUseWebSocket = jest.fn();
  const mockSendMessage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    require('react-use-websocket').default = mockUseWebSocket;
    mockUseWebSocket.mockReturnValue({
      readyState: 1,
      sendMessage: mockSendMessage,
    });
  });

  const readyStates = Object.entries(CONNECTION_STATUS).map(([key, status]) => ({
    state: Number(key),
    status,
  }));

  readyStates.forEach(({ state, status }) => {
    it(`should return the correct connection status (${status}) when readyState is ${state}`, () => {
      mockUseWebSocket.mockReturnValue({
        readyState: state,
      });

      const { result } = renderHook(() => useBinanceWebSocket());

      expect(result.current.connectionStatus).toEqual(status);
    });
  });

  it('should call sendPongMessage when a ping message is received', () => {
    const message = {
      data: JSON.stringify({
        e: 'ping',
        id: 123,
      }),
    };
    renderHook(() => useBinanceWebSocket());
    act(() => {
      mockUseWebSocket.mock.calls[0][1].onMessage(message);
    });

    expect(sendPongMessage).toHaveBeenCalled();
  });

  it('should update the store when a message is received', () => {
    const message = {
      data: JSON.stringify({
        e: '24hrTicker',
        s: 'BTCUSDT',
        c: '10000',
      }),
    };
    renderHook(() => useBinanceWebSocket());
    act(() => {
      mockUseWebSocket.mock.calls[0][1].onMessage(message);
    });

    expect(usePriceStore.getState().prices).toEqual({
      BTCUSDT: {
        lastPrice: '10000',
        priceChange: undefined,
        priceChangePercent: undefined,
      },
    });
  });

  it('should reconnect when shouldReconnect is called', () => {
    renderHook(() => useBinanceWebSocket());
    const shouldReconnect = mockUseWebSocket.mock.calls[0][1].shouldReconnect;
    expect(shouldReconnect()).toBe(true);
  });

  it('should set error when onError is called', () => {
    const { result } = renderHook(() => useBinanceWebSocket());
    const onError = mockUseWebSocket.mock.calls[0][1].onError;
    act(() => {
      onError({ type: 'test error' });
    });
    expect(result.current.error).toEqual('Failed to establish connection: test error');
  });

  it('should clear error and send message when onOpen is called', () => {
    const { result } = renderHook(() => useBinanceWebSocket());
    const onOpen = mockUseWebSocket.mock.calls[0][1].onOpen;
    act(() => {
      onOpen();
    });
    expect(result.current.error).toBe(null);
    expect(mockSendMessage).toHaveBeenCalledWith(
      JSON.stringify({
        method: 'SUBSCRIBE',
        params: COINS.map(coin => `${coin.tickerId}@ticker`),
        id: 1,
      })
    );
  });
});
