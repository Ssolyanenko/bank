import { FC, ReactElement } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const LinkedInIcon: FC<IconProps> = ({ className }): ReactElement => (
  <svg className={className} width="40" height="40" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.5" cy="20.5" r="20" fill={colors.blue_5} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5289 17.5752H13.5508V27.1663H16.5289V17.5752ZM16.7744 14.5373C16.7744 13.5838 15.9995 12.8076 15.0474 12.8076C14.0897 12.8076 13.3203 13.5838 13.3203 14.5373C13.3203 15.4909 14.0897 16.2671 15.0474 16.2671C15.9995 16.2671 16.7744 15.4909 16.7744 14.5373ZM21.2492 17.5756H18.404V27.1668H21.3765V22.4211C21.3765 21.1737 21.609 19.9595 23.1589 19.9595C24.6867 19.9595 24.7033 21.3899 24.7033 22.5042V27.1668H27.6759V21.911C27.6759 19.3275 27.1168 17.3428 24.1055 17.3428C22.6552 17.3428 21.6865 18.1356 21.2879 18.8896H21.2492V17.5756Z"
      fill={colors.white_1}
    />
  </svg>
);
