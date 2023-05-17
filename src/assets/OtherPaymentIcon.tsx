import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const OtherPaymentIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 19C9.93 19 11.62 17.83 12 16L10.25 15.12C10 16.21 9.33 17 8 17H3.1C3.93 16 4.6 14.66 4.6 13C4.6 12.65 4.57 12.31 4.5 12H8V10H3.82C3 8.42 2 7.6 2 6C2.00031 5.17947 2.28889 4.38513 2.81533 3.75575C3.34177 3.12637 4.0726 2.70195 4.88016 2.55663C5.68772 2.41132 6.52066 2.55435 7.23348 2.96074C7.9463 3.36713 8.49368 4.01105 8.78 4.78L10.63 4C9.83 1.95 7.84 0.5 5.5 0.5C2.46 0.5 0 2.96 0 6C0 7.78 0.79 8.9 1.5 10H0V12H2.47C2.55 12.31 2.6 12.64 2.6 13C2.6 15.7 0 17 0 17V19H8Z"
      fill="#FFD600"
    />
  </svg>
);
