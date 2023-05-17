import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useTypedSelector } from 'hooks/useTypedSelector';
import { getUserLogin } from 'store';

interface Props {
  children: JSX.Element;
}

export const SecureWrapper: FC<Props> = ({ children }) => {
  const { isAuth, token } = useTypedSelector(getUserLogin);

  return !token && !isAuth ? <Navigate to="/" /> : children;
};
