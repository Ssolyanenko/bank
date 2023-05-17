import { translationsMainPageComponents } from './mainPageComponents';
import { translationsForms } from './forms';
import { translationsExchageRates } from './exchangeRates';
import { translationsLandingPageComponents } from './landingPageComponents';
import { translationsMyCardApplications } from './myCardApplications';
import { translationsContacts } from './contacts';
import { translationsCardsLimits } from './transactionLimit';
import { translationsCardHistory } from './cardHistory';
import { translationsBasic } from './_basic';

export const translationsComponents = {
  ...translationsMainPageComponents,
  ...translationsForms,
  ...translationsExchageRates,
  ...translationsLandingPageComponents,
  ...translationsMyCardApplications,
  ...translationsContacts,
  ...translationsBasic,
  ...translationsCardHistory,
  ...translationsCardsLimits,
};
