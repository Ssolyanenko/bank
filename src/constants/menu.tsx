import i18next from 'i18n';
import {
  CardTemplateIcon,
  DepositIcon,
  HomeIcon,
  LoanIcon,
  MedicalIcon,
  OfferIcon,
  ShowChartIcon,
  TransferMenuIcon,
} from 'assets';
import classes from 'components/MainPageComponents/Menu/Menu.module.scss';
import { RoutingPaths } from './routingPaths';

export const MENU_SERVICES = [
  {
    icon: <HomeIcon className={classes.icon} />,
    text: i18next.t('menu.mainPage'),
    dropdownList: [],
    defaultPath: `/${RoutingPaths.MAIN_PAGE_URL}`,
  },
  {
    icon: <CardTemplateIcon className={classes.icon} />,
    text: i18next.t('menu.cards'),
    dropdownList: [
      { title: i18next.t('menu.myCards'), path: `/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.CARDS}` },
      {
        title: i18next.t('menu.cardApplications'),
        path: `/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.CARDS}/${RoutingPaths.CARDS_APPLICATIONS}`,
      },
      {
        title: i18next.t('menu.cardProducts'),
        path: `/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.CARDS}/${RoutingPaths.CARD_PRODUCTS}`,
      },
    ],
    defaultPath: `${RoutingPaths.CARDS}`,
  },
  {
    icon: <TransferMenuIcon className={classes.icon} />,
    text: i18next.t('menu.transfers'),
    dropdownList: [],
    defaultPath: RoutingPaths.TRANSFERS,
  },
  {
    icon: <LoanIcon className={classes.icon} />,
    text: i18next.t('menu.loans'),
    dropdownList: [
      { title: i18next.t('menu.myLoans'), path: `/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.LOANS}` },
      {
        title: i18next.t('menu.loanProducts'),
        path: `/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.LOANS}/${RoutingPaths.LOAN_PRODUCTS}`,
      },
      {
        title: i18next.t('menu.applyForALoan'),
        path: `/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.LOANS}/${RoutingPaths.APPLY_LOAN}`,
      },
    ],
    defaultPath: RoutingPaths.LOANS,
  },
  {
    icon: <DepositIcon className={classes.icon} />,
    text: i18next.t('menu.deposits'),
    dropdownList: [],
    defaultPath: RoutingPaths.DEPOSITS,
  },
  {
    icon: <ShowChartIcon className={classes.icon} />,
    text: i18next.t('menu.investing'),
    dropdownList: [],
    defaultPath: RoutingPaths.INVESTING,
  },
  {
    icon: <MedicalIcon className={classes.icon} />,
    text: i18next.t('menu.insurance'),
    dropdownList: [],
    defaultPath: RoutingPaths.INSURANCE,
  },
  {
    icon: <OfferIcon className={classes.icon} />,
    text: i18next.t('menu.dealsAndOffers'),
    dropdownList: [],
    defaultPath: RoutingPaths.DEALS_OFFERS,
  },
];
