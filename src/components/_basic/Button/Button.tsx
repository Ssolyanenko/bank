import React, { FC, ReactNode } from 'react';

import { ButtonType } from 'interfaces/common/componentsSettings';

interface Props {
  className: string;
  children: ReactNode | string;
  type: ButtonType;
  isDisabled?: boolean;
  name?: string;
  onClick?(): void;
}

export const Button: FC<Props> = ({ className, onClick, type, name = 'Button', isDisabled = false, children }) => (
  <button className={className} type={type} onClick={onClick} name={name} disabled={isDisabled}>
    {children}
  </button>
);
