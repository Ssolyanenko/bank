import { SetStateAction } from 'react';

import { ZoomType } from 'constants/zoomType';

export const zoomMap = (typeZoom: string, zoom: number, setZoom: { (value: SetStateAction<number>): void }): void => {
  if (typeZoom === ZoomType.IN) {
    if (zoom + 1 < 18) return setZoom((prev) => prev + 1);
  }

  if (typeZoom === ZoomType.OUT) {
    if (zoom - 1 > 3) return setZoom((prev) => prev - 1);
  }
};
