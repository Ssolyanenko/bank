import { BrowserRouter, Route } from 'react-router-dom';
import { FC, ReactElement, useEffect, useRef } from 'react';

import { ExchangeRates, Contacts, MapPage } from 'components';
import { CustomRoutes } from 'components/_basic';
import { LandingPage, MainPage, LayoutPage, NotFoundPage } from 'pages';
import { fetchCurrentUser } from 'store';
import { useTypedDispatch } from 'hooks';
import { RoutingPaths } from 'constants/routingPaths';
import { saveTimerToSessionStorage } from 'helpers/saveTimerToSessionStorage';
import './App.scss';

export const App: FC = (): ReactElement => {
  const dispatch = useTypedDispatch();
  const isInitialMount = useRef(true);

  useEffect((): void => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);

  useEffect((): void => {
    window.addEventListener('load', saveTimerToSessionStorage);
  }, []);

  return (
    <BrowserRouter>
      <CustomRoutes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<LayoutPage />}>
          <Route path={`${RoutingPaths.MAIN_PAGE_URL}/contacts`} element={<Contacts />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path={`${RoutingPaths.MAIN_PAGE_URL}/currency-rate`} element={<ExchangeRates />} />
          <Route path="/currency-rate" element={<ExchangeRates />} />
          <Route path={`${RoutingPaths.MAIN_PAGE_URL}/*`} element={<MainPage />} />
          <Route path={`${RoutingPaths.MAIN_PAGE_URL}/branches`} element={<MapPage />} />
          <Route path="/branches" element={<MapPage />} />
          <Route path={`${RoutingPaths.PAGE_NOT_FOUND}`} element={<NotFoundPage />} />
        </Route>
      </CustomRoutes>
    </BrowserRouter>
  );
};
