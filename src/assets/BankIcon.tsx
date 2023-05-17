import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const BankIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18.5" fill="white" stroke={colors.orange} strokeWidth="3" />
    <path
      d="M11.6738 16.6055L9.125 24H7.58398L10.7949 15.4688H11.7793L11.6738 16.6055ZM13.8066 24L11.252 16.6055L11.1406 15.4688H12.1309L15.3535 24H13.8066ZM13.6836 20.8359V22.002H9.04297V20.8359H13.6836ZM19.0801 15.4688V24H17.6211V15.4688H19.0801ZM21.7578 15.4688V16.6406H14.9668V15.4688H21.7578ZM23.4805 15.4688H24.793L27.2598 22.0488L29.7207 15.4688H31.0332L27.7754 24H26.7324L23.4805 15.4688ZM22.8828 15.4688H24.1309L24.3477 21.1641V24H22.8828V15.4688ZM30.3828 15.4688H31.6367V24H30.166V21.1641L30.3828 15.4688Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
