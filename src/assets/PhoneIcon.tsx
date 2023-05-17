import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const PhoneIcon: FC<IconProps> = ({ className, iconsColor, size = '24px' }) => (
  <svg
    className={className}
    viewBox="0 0 20 30"
    width={size}
    height={size}
    fill={iconsColor}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3333 0.333496H4.66663C2.45329 0.333496 0.666626 2.12016 0.666626 4.3335V25.6668C0.666626 27.8802 2.45329 29.6668 4.66663 29.6668H15.3333C17.5466 29.6668 19.3333 27.8802 19.3333 25.6668V4.3335C19.3333 2.12016 17.5466 0.333496 15.3333 0.333496ZM16.6666 23.0002H3.33329V4.3335H16.6666V23.0002ZM12.6666 27.0002H7.33329V25.6668H12.6666V27.0002Z"
      fill={iconsColor}
    />
  </svg>
);
