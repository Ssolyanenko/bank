import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const ChangeTransactionLimitIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 20C15 20.5523 14.5523 21 14 21C13.4477 21 13 20.5523 13 20C13 19.4477 13.4477 19 14 19C14.5523 19 15 19.4477 15 20Z"
      fill={colors.grayDark_6}
    />
    <path d="M13 7H15V16.5H13V7Z" fill={colors.grayDark_6} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 8.61211L19.3879 0H8.61211L0 8.61211V19.3879L8.61211 28H19.3879L28 19.3879V8.61211ZM26 18.5571V9.44289L18.5571 2H9.44289L2 9.44289V18.5571L9.44289 26H18.5571L26 18.5571Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
