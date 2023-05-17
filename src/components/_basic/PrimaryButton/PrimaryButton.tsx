import { FC } from 'react';

import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import classes from './PrimaryButton.module.scss';

interface Props {
  children: React.ReactNode;
  onClick?(): void;
  className?: string;
  name?: string;
  isDisabled?: boolean;
  type?: ButtonType;
  size?: Size;
}

export const PrimaryButton: FC<Props> = ({
  children,
  onClick,
  name = 'primaryButton',
  className = '',
  isDisabled = false,
  type = ButtonType.BUTTON,
  size = Size.MEDIUM,
}) => (
  <button
    className={`${classes.primaryBtn} ${className} ${classes[size]}`}
    type={type}
    onClick={onClick}
    name={name}
    disabled={isDisabled}
  >
    {children}
  </button>
);
