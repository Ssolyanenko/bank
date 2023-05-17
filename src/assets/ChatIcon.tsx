import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const ChatIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="43" cy="43" r="43" fill={colors.orange} />
    <path
      d="M35.0273 49.9407C35.4942 57.6963 42.02 63.8437 50.0006 63.8437C51.4863 63.8459 52.9658 63.6285 54.4012 63.197C55.3762 63.7528 57.4744 64.7651 60.9037 65.5322C61.348 65.6315 61.7937 65.7224 62.2406 65.8048C62.6156 65.8725 62.9006 65.4329 62.7525 65.0398C62.586 64.5973 62.4334 64.1483 62.295 63.6936L62.2894 63.6725C61.8244 62.1509 61.4456 60.401 61.3069 58.7717C63.6075 56.1723 65.0006 52.7698 65.0006 49.0503C65.0006 42.5017 60.6858 36.947 54.7074 35C54.8531 35.7482 54.9466 36.5199 54.9832 37.3096C59.8551 39.2409 63.1256 43.91 63.1256 49.0503C63.1256 52.1527 61.9687 55.0311 59.9794 57.2796C59.7848 57.4998 59.6356 57.7657 59.5426 58.0583C59.4496 58.3509 59.415 58.663 59.4412 58.9724C59.573 60.4044 59.8229 61.8194 60.1875 63.1991C57.5719 62.5165 55.9744 61.7261 55.2487 61.3119C54.8372 61.0769 54.3632 61.0213 53.9175 61.1555C52.6398 61.5394 51.3229 61.7327 50.0006 61.7303C43.0694 61.7303 37.7299 56.6537 36.9689 50.5509C36.2761 50.4786 35.6209 50.2664 35.0273 49.9407Z"
      fill={colors.grayDark_6}
    />
    <path
      d="M27.6908 46.2747C27.9113 46.4962 28.0803 46.7635 28.1858 47.0577C28.2912 47.3519 28.3304 47.6658 28.3006 47.9769C28.1513 49.4167 27.8681 50.8395 27.4549 52.2269C30.4192 51.5405 32.2298 50.7458 33.0521 50.3293C33.5186 50.093 34.0557 50.037 34.5609 50.172C36.0089 50.558 37.5014 50.7524 39 50.75C47.4915 50.75 53.875 44.7851 53.875 38C53.875 31.217 47.4915 25.25 39 25.25C30.5085 25.25 24.125 31.217 24.125 38C24.125 41.1195 25.4361 44.0138 27.6908 46.2747ZM26.6431 54.5729C26.1396 54.6727 25.6345 54.7641 25.128 54.847C24.703 54.915 24.38 54.473 24.5479 54.0777C24.7366 53.6328 24.9095 53.1813 25.0664 52.7241L25.0727 52.7029C25.5998 51.1729 26.029 49.4134 26.1863 47.775C23.5789 45.1613 22 41.74 22 38C22 29.7847 29.6117 23.125 39 23.125C48.3883 23.125 56 29.7847 56 38C56 46.2153 48.3883 52.875 39 52.875C37.3163 52.8773 35.6395 52.6587 34.0126 52.2248C32.9076 52.7836 30.5297 53.8015 26.6431 54.5729Z"
      fill={colors.grayDark_6}
    />
  </svg>
);
