import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const PaymentIcon: FC<IconProps> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 14.5V5.5C18 4.4 17.1 3.5 16 3.5H4C2.9 3.5 2 4.4 2 5.5V14.5C2 15.6 2.9 16.5 4 16.5H16C17.1 16.5 18 15.6 18 14.5ZM16 14.5H4V5.5H16V7.5H4V10.5H16V14.5ZM22 7.5V18.5C22 19.6 21.1 20.5 20 20.5H4C4 19.5 4 19.6 4 18.5H20V7.5C21.1 7.5 21 7.5 22 7.5Z"
      fill="#FFD600"
    />
  </svg>
);
