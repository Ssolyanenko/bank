import { LEFT, RIGHT, DOUBLE_RIGHT, DOUBLE_LEFT, PaginationSwitchType } from 'constants/pagination';

export const handleChangePages = (type: PaginationSwitchType, pageNumber: number, allPages: number): number => {
  if (type === RIGHT && pageNumber < allPages) return pageNumber + 1;

  if (type === DOUBLE_RIGHT && pageNumber < allPages - 1) return pageNumber + 2;

  if (type === LEFT && pageNumber > 1) return pageNumber - 1;

  if (type === DOUBLE_LEFT && pageNumber > 2) return pageNumber - 2;

  return pageNumber;
};
