import React, { FC, ReactElement, useEffect } from 'react';
import { Route } from 'react-router';

import {
  Menu,
  CardProducts,
  DebitCards,
  MyLoans,
  DebitTravelCard,
  UserAccount,
  DebitSmartCard,
  CardDetails,
  TransferList,
} from 'components';
import { CustomRoutes, Loader, SecureWrapper } from 'components/_basic';
import {
  MyCardApplicationsPage,
  MyCardsPage,
  CreditCardsPage,
  CreditCardPremiumPage,
  CreditCardBillablePage,
  MainPageContent,
} from 'pages';
import { RoutingPaths } from 'constants/routingPaths';
import { GET_USER_CARDS_URL, USER_DATA_URL } from 'constants/requestUrls';
import { FetchStatus } from 'constants/fetchStatus';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { getUserCardsFetching, getUserFetching, requestUserCards, requestUserDataAfterLogin } from 'store';
import classes from './MainPage.module.scss';

export const MainPage: FC = (): ReactElement => {
  const dispatch = useTypedDispatch();
  const userDataFetchStatus = useTypedSelector(getUserFetching);
  const userCardFetchStatus = useTypedSelector(getUserCardsFetching);

  const isFetching = userDataFetchStatus === FetchStatus.REQUEST || userCardFetchStatus === FetchStatus.REQUEST;

  useEffect((): void => {
    dispatch(requestUserDataAfterLogin(USER_DATA_URL));
    dispatch(requestUserCards(GET_USER_CARDS_URL));
  }, [dispatch]);

  return (
    <SecureWrapper>
      <div className={classes.mainPage}>
        {isFetching && <Loader />}
        <main className={classes.main}>
          <Menu />
          <CustomRoutes>
            <Route index element={<MainPageContent />} />
            <Route path={`${RoutingPaths.CARDS}`} element={<MyCardsPage />} />
            <Route path={`${RoutingPaths.CARDS}/${RoutingPaths.CARD_PRODUCTS}`} element={<CardProducts />} />
            <Route
              path={`${RoutingPaths.CARDS}/${RoutingPaths.CARDS_APPLICATIONS}`}
              element={<MyCardApplicationsPage />}
            />
            <Route
              path={`${RoutingPaths.CARDS}/${RoutingPaths.CARD_PRODUCTS}/${RoutingPaths.DEBIT_CARDS}`}
              element={<DebitCards />}
            />
            <Route
              path={`${RoutingPaths.CARDS}/${RoutingPaths.CARD_PRODUCTS}/${RoutingPaths.DEBIT_CARDS}/${RoutingPaths.DEBIT_SMART_CARD}`}
              element={<DebitSmartCard />}
            />
            <Route
              path={`${RoutingPaths.CARDS}/${RoutingPaths.CARD_PRODUCTS}/${RoutingPaths.DEBIT_CARDS}/${RoutingPaths.DEBIT_TRAVEL_CARD}`}
              element={<DebitTravelCard />}
            />
            <Route
              path={`${RoutingPaths.CARDS}/${RoutingPaths.CARD_PRODUCTS}/${RoutingPaths.CREDIT_CARDS}`}
              element={<CreditCardsPage />}
            />
            <Route
              path={`${RoutingPaths.CARDS}/${RoutingPaths.CARD_PRODUCTS}/${RoutingPaths.CREDIT_CARDS}/${RoutingPaths.CREDIT_CARD_BILLABLE}`}
              element={<CreditCardBillablePage />}
            />
            <Route
              path={`${RoutingPaths.CARDS}/${RoutingPaths.CARD_PRODUCTS}/${RoutingPaths.CREDIT_CARDS}/${RoutingPaths.CREDIT_CARD_BILLABLE_PREMIUM}`}
              element={<CreditCardPremiumPage />}
            />
            <Route path={RoutingPaths.TRANSFERS} element={<TransferList />} />
            <Route path={`${RoutingPaths.CARDS}/:cardId/${RoutingPaths.CARD_DETAILS}`} element={<CardDetails />} />
            <Route path={RoutingPaths.LOANS} element={<MyLoans isLoans isLoanApplications={false} />} />
            <Route path={RoutingPaths.USER_ACCOUNT} element={<UserAccount />} />
          </CustomRoutes>
        </main>
      </div>
    </SecureWrapper>
  );
};
