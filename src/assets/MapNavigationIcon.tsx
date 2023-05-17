import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const MapNavigationIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_915_22458)">
      <circle cx="24" cy="20" r="20" transform="rotate(90 24 20)" fill="white" />
    </g>
    <g clipPath="url(#clip0_915_22458)">
      <path
        d="M28 20C28 17.79 26.21 16 24 16C21.79 16 20 17.79 20 20C20 22.21 21.79 24 24 24C26.21 24 28 22.21 28 20ZM25 28.94C29.17 28.48 32.48 25.17 32.94 21H35V19H32.94C32.48 14.83 29.17 11.52 25 11.06V9H23V11.06C18.83 11.52 15.52 14.83 15.06 19H13V21H15.06C15.52 25.17 18.83 28.48 23 28.94V31H25V28.94ZM17 20C17 16.13 20.13 13 24 13C27.87 13 31 16.13 31 20C31 23.87 27.87 27 24 27C20.13 27 17 23.87 17 20Z"
        fill={colors.grayDark_6}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_915_22458"
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
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_915_22458" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_915_22458" result="shape" />
      </filter>
      <clipPath id="clip0_915_22458">
        <rect width="24" height="24" fill="white" transform="translate(36 8) rotate(90)" />
      </clipPath>
    </defs>
  </svg>
);
