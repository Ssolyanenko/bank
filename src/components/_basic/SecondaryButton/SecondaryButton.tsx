import { FC } from 'react';

import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import classes from './SecondaryButton.module.scss';

interface Props {
  children: React.ReactNode;
  name?: string;
  onClick?(): void;
  className?: string;
  type?: ButtonType;
  isDisabled?: boolean;
  size?: Size;
}

export const SecondaryButton: FC<Props> = ({
  children,
  onClick,
  name = 'secondaryButton',
  className = '',
  isDisabled = false,
  type = ButtonType.BUTTON,
  size = Size.MEDIUM,
}) => (
  <button
    className={`${classes.secondaryBtn} ${className} ${classes[size]}`}
    type={type}
    onClick={onClick}
    name={name}
    disabled={isDisabled}
  >
    {children}
  </button>
);
