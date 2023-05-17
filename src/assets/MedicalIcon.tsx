import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';

export const MedicalIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 20H4V8H20V20Z" />
    <path d="M13 10H11V13H8V15H11V18H13V15H16V13H13V10Z" />
  </svg>
);
