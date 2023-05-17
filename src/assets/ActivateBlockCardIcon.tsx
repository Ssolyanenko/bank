import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const ActivateBlockCardIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="29" height="30" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.95 14.5071L19.9 6.55711L21.2929 7.95L11.95 17.2929L7.70711 13.05L9.1 11.6571L11.95 14.5071Z"
      fill={colors.grayDark_6}
    />
    <path d="M21.5 22V20H7.5V22H21.5Z" fill={colors.grayDark_6} />
    <path
      d="M0 15C0 7.02614 6.52614 0.5 14.5 0.5C22.4739 0.5 29 7.02614 29 15C29 22.9739 22.4739 29.5 14.5 29.5C6.52614 29.5 0 22.9739 0 15ZM2 15C2 21.8911 7.60886 27.5 14.5 27.5C21.3911 27.5 27 21.8911 27 15C27 8.10886 21.3911 2.5 14.5 2.5C7.60886 2.5 2 8.10886 2 15Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
