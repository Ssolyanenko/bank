import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const ZoomInIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_911_19391)">
      <circle cx="24" cy="20" r="20" fill="white" />
    </g>
    <path d="M31 21H25V27H23V21H17V19H23V13H25V19H31V21Z" fill={colors.grayDark_6} />
    <defs>
      <filter
        id="filter0_d_911_19391"
        x="0"
        y="0"
        width="48"
        height="48"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_911_19391" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_911_19391" result="shape" />
      </filter>
    </defs>
  </svg>
);
