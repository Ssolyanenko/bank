import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const VisibilityIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_4965_106434)">
      <path
        d="M12.5 6C16.29 6 19.67 8.13 21.32 11.5C19.67 14.87 16.29 17 12.5 17C8.71 17 5.33 14.87 3.68 11.5C5.33 8.13 8.71 6 12.5 6ZM12.5 4C7.5 4 3.23 7.11 1.5 11.5C3.23 15.89 7.5 19 12.5 19C17.5 19 21.77 15.89 23.5 11.5C21.77 7.11 17.5 4 12.5 4ZM12.5 9C13.88 9 15 10.12 15 11.5C15 12.88 13.88 14 12.5 14C11.12 14 10 12.88 10 11.5C10 10.12 11.12 9 12.5 9ZM12.5 7C10.02 7 8 9.02 8 11.5C8 13.98 10.02 16 12.5 16C14.98 16 17 13.98 17 11.5C17 9.02 14.98 7 12.5 7Z"
        fill={colors.grayDark_6}
      />
    </g>
    <defs>
      <clipPath id="clip0_4965_106434">
        <rect width="24" height="24" fill={colors.white_1} transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);
