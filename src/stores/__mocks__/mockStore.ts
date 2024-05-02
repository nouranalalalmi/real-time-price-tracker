export const mockStore = (store: string) => {
  jest.doMock(store, () => {
    const actualObject = jest.requireActual(store);
    return {
      ...actualObject,
      getState: jest.fn(),
    };
  });
};
