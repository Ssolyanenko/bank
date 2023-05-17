interface Store {
  accessToken?: string;
}

export const fakeSessionStorage = () => {
  let sessionStore: Store = { accessToken: 'tokenValue' };

  return {
    getItem(key: string): string | undefined {
      return sessionStore[key as keyof Store];
    },
    setItem(key: string, value: string): void {
      sessionStore[key as keyof Store] = value.toString();
    },
    removeItem(key: string): void {
      delete sessionStore[key as keyof Store];
    },
    clear(): void {
      sessionStore = {};
    },
  };
};
