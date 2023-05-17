import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const PayIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.0007 13.081V16L24.334 12L19.0007 8V10.919L7.00065 10.919V13.081L19.0007 13.081Z"
      fill={colors.grayDark_6}
    />
    <path
      d="M11.9999 20.0004H5.99992V4.00006H11.9999V9.00021H14L13.9998 4.00006C13.9998 2.9 13.0998 2 11.9998 2L1.99989 2.00017C0.900002 2.00017 0 2.90017 0 4.00006V19.9999C0 21.1 0.900002 22 2.00006 22H11.9999C13.1 22 14 21.1 14 19.9999V14.9998H11.9999L11.9999 20.0004ZM3.99978 20.0004H1.99971V4.00006H3.99978V20.0004Z"
      fill={colors.grayDark_6}
    />
    <path d="M7 15H9V19H7V15Z" fill={colors.grayDark_6} />
  </svg>
);
