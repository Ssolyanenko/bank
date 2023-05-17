const createNoopStorage = () => ({
  getItem(): Promise<null> {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: string): Promise<string> {
    return Promise.resolve(value);
  },
  removeItem(): Promise<void> {
    return Promise.resolve();
  },
});

export { createNoopStorage };
