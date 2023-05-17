import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const ChangePINCodeIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="34" height="20" viewBox="0 0 34 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.25 14C8.05114 14 6.25 12.1989 6.25 10C6.25 7.80114 8.05114 6 10.25 6C12.4489 6 14.25 7.80114 14.25 10C14.25 12.1989 12.4489 14 10.25 14ZM10.25 8C9.14886 8 8.25 8.89886 8.25 10C8.25 11.1011 9.14886 12 10.25 12C11.3511 12 12.25 11.1011 12.25 10C12.25 8.89886 11.3511 8 10.25 8Z"
      fill={colors.grayDark_6}
    />
    <path
      d="M33.75 6V14H30.75V20H22.75V14H19.4128L19.2777 14.2869C17.6499 17.7424 14.1357 20 10.25 20C4.73614 20 0.25 15.5139 0.25 10C0.25 4.48614 4.73614 0 10.25 0C14.1346 0 17.6352 2.25673 19.2784 5.7146L19.414 6H33.75ZM24.75 18H28.75V12H31.75V8H18.017L17.7879 7.33265L17.7867 7.32909C16.6659 4.143 13.6262 2 10.25 2C5.83386 2 2.25 5.58386 2.25 10C2.25 14.4161 5.83386 18 10.25 18C13.6262 18 16.6659 15.857 17.7867 12.6709L18.017 12H24.75V18Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
