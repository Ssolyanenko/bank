import { requestPages } from 'services/requestPages';

export const getPages = async (
  setAllRecords: (arg: number) => void,
  setAllPages: (arg: number) => void
): Promise<void> => {
  const [rec, pages] = await requestPages();
  setAllRecords(rec);
  setAllPages(pages);
};
