import { FC, ReactElement } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const InstagramIcon: FC<IconProps> = ({ className }): ReactElement => (
  <svg className={className} width="40" height="40" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.5" cy="20.5" r="20" fill="url(#paint0_linear_3671_107048)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.0229 11.7822H16.9755C14.1114 11.7822 11.7812 14.1124 11.7812 16.9765V24.0239C11.7812 26.888 14.1114 29.2181 16.9755 29.2181H24.0229C26.887 29.2181 29.2171 26.888 29.2171 24.0239V16.9765C29.2171 14.1124 26.887 11.7822 24.0229 11.7822ZM27.463 24.0237C27.463 25.9237 25.9227 27.4639 24.0228 27.4639H16.9754C15.0754 27.4639 13.5352 25.9237 13.5352 24.0237V16.9763C13.5352 15.0763 15.0754 13.5361 16.9754 13.5361H24.0228C25.9227 13.5361 27.463 15.0763 27.463 16.9763V24.0237ZM15.9922 20.4997C15.9922 18.0132 18.0152 15.9902 20.5017 15.9902C22.9883 15.9902 25.0113 18.0132 25.0113 20.4997C25.0113 22.9863 22.9883 25.0093 20.5017 25.0093C18.0152 25.0093 15.9922 22.9863 15.9922 20.4997ZM20.4977 23.2561C18.9759 23.2561 17.7422 22.0224 17.7422 20.5006C17.7422 18.9788 18.9759 17.7451 20.4977 17.7451C22.0195 17.7451 23.2532 18.9788 23.2532 20.5006C23.2532 22.0224 22.0195 23.2561 20.4977 23.2561ZM25.0181 17.1045C25.6149 17.1045 26.0987 16.6207 26.0987 16.0239C26.0987 15.4272 25.6149 14.9434 25.0181 14.9434C24.4213 14.9434 23.9375 15.4272 23.9375 16.0239C23.9375 16.6207 24.4213 17.1045 25.0181 17.1045Z"
      fill={colors.white_1}
    />
    <defs>
      <linearGradient
        id="paint0_linear_3671_107048"
        x1="0.633641"
        y1="0.43318"
        x2="0.500001"
        y2="40.4332"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={colors.violet_4} />
        <stop offset="0.415461" stopColor={colors.pink_1} />
        <stop offset="0.702206" stopColor={colors.pink_2} />
        <stop offset="1" stopColor={colors.orange_1} />
      </linearGradient>
    </defs>
  </svg>
);
