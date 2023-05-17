import { SyntheticEvent } from 'react';

export interface IconProps {
  className?: string;
  color?: string;
  size?: string;
  iconsColor?: string;
  onClick?(event: SyntheticEvent): void;
}
