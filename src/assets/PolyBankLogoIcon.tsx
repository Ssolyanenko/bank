import { FC } from 'react';

import { IconProps } from 'interfaces/common/Icons';
import colors from 'styles/variables.module.scss';

export const PolyBankLogoIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} width="20" height="38" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.23877 7.31836L6.48531 10.977V33.3682L0.23877 29.6608V7.31836Z" fill={colors.orange} />
    <path d="M12.9238 7.60963V14.8294L19.1704 18.5369V3.70703L12.9238 7.60963Z" fill={colors.orange} />
    <path d="M12.9229 7.61128L12.9229 0.00120223L19.1696 3.70867L12.9229 7.61128Z" fill={colors.brand_4} />
    <path d="M12.9332 22.2651L6.48429 18.5371L12.9332 14.8297L12.9332 22.2651Z" fill={colors.brand_7} />
    <path d="M6.58066 3.7067L12.9234 7.6093L6.48462 11.0939L6.58066 3.7067Z" fill={colors.brand_8} />
    <path d="M6.4844 11.0737L6.58053 3.70758L0.237554 7.31749L6.4844 11.0737Z" fill={colors.brand_4} />
    <path d="M12.9334 14.8069L12.9334 22.2423L19.1696 18.5143L12.9334 14.8069Z" fill={colors.brand_4} />
    <path d="M6.48451 18.5366L6.48458 26.1281L12.9234 22.244L6.48451 18.5366Z" fill={colors.brand_8} />
    <path d="M12.9329 7.60954L6.59026 3.71719L12.9329 -0.000536092L12.9329 7.60954Z" fill={colors.brand_7} />
    <path d="M0.24847 29.6607L6.48488 33.3681L0.24847 37.0961L0.24847 29.6607Z" fill={colors.brand_8} />
  </svg>
);
