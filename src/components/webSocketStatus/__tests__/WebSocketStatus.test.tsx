import { render, screen } from '@testing-library/react';

import { useBinanceWebSocket } from '@/utils/webSocket/useBinanceWebSocket';

import { WebSocketStatus } from '../WebSocketStatus';

jest.mock('@/utils/webSocket/useBinanceWebSocket');

describe('WebSocketStatus', () => {
  it('should display connection status', () => {
    (useBinanceWebSocket as jest.Mock).mockReturnValue({
      connectionStatus: 'connected',
      error: null,
    });

    const { container } = render(<WebSocketStatus />);

    expect(screen.getByText('Web socket status: connected')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should display error message', () => {
    (useBinanceWebSocket as jest.Mock).mockReturnValue({
      connectionStatus: 'disconnected',
      error: 'Test error',
    });

    const { container } = render(<WebSocketStatus />);

    expect(screen.getByText('Web socket status: disconnected')).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
