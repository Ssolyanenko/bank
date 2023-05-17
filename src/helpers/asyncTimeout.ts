export const asyncTimeout = (ms: number): Promise<boolean> =>
  new Promise<boolean>((resolve) => {
    setTimeout(resolve, ms);
  });
