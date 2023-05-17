import React, { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const CardStatementIcon: FC<IconProps> = ({ className, color = colors.orange }) => (
  <svg className={className} width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.5" cy="20" r="20" fill={color} />
    <g clipPath="url(#clip0_4898_21458)">
      <path
        d="M28.5 11H27.5V9H25.5V11H15.5V9H13.5V11H12.5C11.4 11 10.5 11.9 10.5 13V29C10.5 30.1 11.4 31 12.5 31H28.5C29.6 31 30.5 30.1 30.5 29V13C30.5 11.9 29.6 11 28.5 11ZM28.5 29H12.5V18H28.5V29ZM28.5 16H12.5V13H28.5V16Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_4898_21458">
        <rect width="24" height="24" fill={colors.white_1} transform="translate(8.5 8)" />
      </clipPath>
    </defs>
  </svg>
);
