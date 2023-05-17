import { DAYS } from 'constants/days';
import { Branch } from 'interfaces/branch';
import { getInfom, getTimeWork } from './getTimeWork';

export const getResultButton = (text: string | null, branch: Branch, day: string): string | boolean | undefined => {
  switch (text) {
    case 'Withdraw cash':
      return branch.cashWithDrawal;
    case 'Transfer':
      return branch.moneyTransfer;
    case 'Top up':
      return branch.topUp;
    case 'Top up without card':
      return branch.topUpWithoutCard;
    case 'Payments':
      return branch.payment;
    case 'Currency exchange':
      return branch.currencyExchange;
    case 'Pandus':
      return branch.pandus;
    case 'Exotic currency exchange':
      return branch.exoticCurrencyExchange;
    case 'Consultation':
      return branch.consultation;
    case 'Insurance':
      return branch.insurance;
    case 'Open now':
      return getInfom(branch, day);
    case '24/7':
      return getTimeWork(branch, day) === '24/7';
    case 'Weekends':
      return getTimeWork(branch, DAYS.Sat) && getTimeWork(branch, DAYS.Sun);
    default:
      break;
  }
};
