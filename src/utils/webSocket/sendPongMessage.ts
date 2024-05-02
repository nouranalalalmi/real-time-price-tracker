export const sendPongMessage = (id: number, sendMessage: Function) => {
  const message = JSON.stringify({
    method: 'pong',
    params: [],
    id,
  });

  sendMessage(message);
};
