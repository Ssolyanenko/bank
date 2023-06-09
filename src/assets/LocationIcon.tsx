import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const LocationIcon: FC<IconProps> = ({ className, size = '24px', iconsColor }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={iconsColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2.6665C10.84 2.6665 6.66663 6.83984 6.66663 11.9998C6.66663 18.9998 16 29.3332 16 29.3332C16 29.3332 25.3333 18.9998 25.3333 11.9998C25.3333 6.83984 21.16 2.6665 16 2.6665ZM9.33329 11.9998C9.33329 8.31984 12.32 5.33317 16 5.33317C19.68 5.33317 22.6666 8.31984 22.6666 11.9998C22.6666 15.8398 18.8266 21.5865 16 25.1732C13.2266 21.6132 9.33329 15.7998 9.33329 11.9998Z"
      fill={iconsColor}
    />
    <path
      d="M16 15.3332C17.8409 15.3332 19.3333 13.8408 19.3333 11.9998C19.3333 10.1589 17.8409 8.6665 16 8.6665C14.159 8.6665 12.6666 10.1589 12.6666 11.9998C12.6666 13.8408 14.159 15.3332 16 15.3332Z"
      fill={iconsColor}
    />
  </svg>
);
