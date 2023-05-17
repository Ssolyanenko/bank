import React, { FC } from 'react';

import { IconProps as Props } from 'interfaces/common/Icons';

export const ExclamationMarkIcon: FC<Props> = ({ className }) => (
  <svg className={className} width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        d="M40.7666 0.5C18.6866 0.5 0.766602 18.42 0.766602 40.5C0.766602 62.58 18.6866 80.5 40.7666 80.5C62.8466 80.5 80.7666 62.58 80.7666 40.5C80.7666 18.42 62.8466 0.5 40.7666 0.5ZM44.7666 60.5H36.7666V52.5H44.7666V60.5ZM44.7666 44.5H36.7666V20.5H44.7666V44.5Z"
        fill="#FFD600"
      />
      <circle cx="41" cy="40.5" r="38.5" stroke="#FFF9C4" strokeWidth="3" />
    </g>
    <defs>
      <clipPath>
        <rect width="80" height="80" fill="blue" transform="translate(0.5 0.5)" />
      </clipPath>
    </defs>
  </svg>
);
