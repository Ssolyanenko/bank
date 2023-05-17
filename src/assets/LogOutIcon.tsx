import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const LogOutIcon: FC<IconProps> = ({ className, iconsColor, size = '24px' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={iconsColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 21V19H4V5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12Z" fill={iconsColor} />
    <path d="M15.6 8.4L17 7L22 12L17 17L15.6 15.6L18.2 13H8V11H18.2L15.6 8.4Z" fill={iconsColor} />
  </svg>
);
