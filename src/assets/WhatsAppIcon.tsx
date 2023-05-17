import { FC, ReactElement } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const WhatsAppIcon: FC<IconProps> = ({ className }): ReactElement => (
  <svg className={className} width="40" height="40" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20.5001" cy="20.5" rx="20.0001" ry="20" fill={colors.green_1} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.2697 22.2828C25.9827 22.14 24.5759 21.4519 24.3139 21.3561C24.052 21.2612 23.8614 21.2142 23.6697 21.4998C23.4791 21.7835 22.9312 22.4256 22.7646 22.6153C22.597 22.806 22.4304 22.829 22.1444 22.6872C21.8584 22.5434 20.9359 22.2435 19.843 21.2736C18.9927 20.5185 18.4178 19.586 18.2512 19.3004C18.0847 19.0158 18.233 18.8615 18.3764 18.7197C18.5055 18.5922 18.6624 18.3871 18.8059 18.2214C18.9494 18.0546 18.9966 17.9358 19.0919 17.7451C19.1882 17.5553 19.14 17.3895 19.0678 17.2467C18.9966 17.1039 18.4246 15.7019 18.1858 15.1317C17.9537 14.5768 17.7178 14.6525 17.5425 14.6429C17.375 14.6353 17.1843 14.6334 16.9936 14.6334C16.803 14.6334 16.4929 14.7043 16.231 14.9899C15.9681 15.2745 15.2295 15.9635 15.2295 17.3656C15.2295 18.7666 16.2541 20.1208 16.3976 20.3115C16.5411 20.5012 18.4149 23.3781 21.2855 24.6115C21.9692 24.9048 22.5017 25.0801 22.9167 25.2105C23.6023 25.428 24.2263 25.3973 24.7193 25.3236C25.2682 25.2421 26.4122 24.6345 26.651 23.9694C26.8889 23.3043 26.8889 22.7341 26.8176 22.6153C26.7463 22.4965 26.5557 22.4256 26.2687 22.2828H26.2697ZM21.0486 29.3773H21.0448C19.3398 29.3776 17.6661 28.9215 16.1992 28.0567L15.8525 27.8516L12.2492 28.7927L13.2112 25.2967L12.9849 24.9383C12.0317 23.4283 11.5273 21.6807 11.5299 19.8975C11.5318 14.6746 15.8015 10.4253 21.0525 10.4253C23.5946 10.4253 25.9847 11.4124 27.7815 13.2026C28.6678 14.081 29.3702 15.1255 29.8483 16.2758C30.3263 17.4262 30.5703 18.6594 30.5664 19.9042C30.5644 25.1271 26.2947 29.3773 21.0486 29.3773ZM29.1489 11.8427C28.0879 10.7798 26.8255 9.93709 25.4349 9.3633C24.0443 8.78952 22.553 8.49609 21.0476 8.50004C14.7365 8.50004 9.59822 13.6127 9.59629 19.8965C9.59337 21.8963 10.1205 23.8615 11.1245 25.5938L9.5 31.5L15.5704 29.9149C17.2497 30.8255 19.1315 31.3025 21.0438 31.3026H21.0486C27.3597 31.3026 32.498 26.1899 32.4999 19.9051C32.5046 18.4075 32.2108 16.9239 31.6356 15.54C31.0604 14.1561 30.2152 12.8994 29.1489 11.8427Z"
      fill={colors.white_1}
    />
  </svg>
);
