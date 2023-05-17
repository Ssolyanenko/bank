import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { RoutingPaths } from 'constants/routingPaths';

export const CustomRoutes: FC<PropsWithChildren> = ({ children }): ReactElement => (
  <Routes>
    {children}
    <Route path="*" element={<Navigate to={`/${RoutingPaths.PAGE_NOT_FOUND}`} />} />
  </Routes>
);
