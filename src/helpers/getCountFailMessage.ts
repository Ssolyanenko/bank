export const getCountFailMessage = (failsCount: number, failTexts: string[]): { text: string; index: number } => {
  const failIndex = (failsCount % 3) - 1;
  const lastFailIndex = failTexts.length - 1;

  return {
    text: failTexts[failIndex >= 0 ? failIndex : lastFailIndex],
    index: failIndex,
  };
};
