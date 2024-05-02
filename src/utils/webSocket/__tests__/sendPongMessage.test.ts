import { sendPongMessage } from '../sendPongMessage';

const sendMessage = jest.fn();

describe('sendPongMessage', () => {
  it('should send a pong message with the correct id', () => {
    const id = 123;
    sendPongMessage(id, sendMessage);

    expect(sendMessage).toHaveBeenCalledWith(
      JSON.stringify({
        method: 'pong',
        params: [],
        id,
      })
    );
  });
});
