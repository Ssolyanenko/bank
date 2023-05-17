import { DOUBLE_LEFT, DOUBLE_RIGHT, LEFT, RIGHT, PaginationSwitchType } from 'constants/pagination';
import { DARK_GRAY, GRAY } from 'constants/colors';

export const getSwitchColor = (type: PaginationSwitchType, pageNumber: number, allPages: number): string => {
  if (
    (type === RIGHT && pageNumber < allPages) ||
    (type === DOUBLE_RIGHT && pageNumber < allPages - 1) ||
    (type === LEFT && pageNumber > 1) ||
    (type === DOUBLE_LEFT && pageNumber > 2)
  ) {
    return DARK_GRAY;
  }

  return GRAY;
};
