import { FC } from 'react';

import { IconProps as Props } from 'interfaces/common/Icons';

export const FilterIcon: FC<Props> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" />
  </svg>
);
