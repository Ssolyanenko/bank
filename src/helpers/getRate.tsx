import { EUIcon, USIcon, FlagsIcon, SwissIcon, UKIcon } from 'assets';
import { RateAbbreviation } from 'constants/rates';

export const getRateIcon = (text: string, classIcon?: string): JSX.Element | null => {
  switch (text) {
    case RateAbbreviation.USD:
      return <USIcon className={classIcon} />;
    case RateAbbreviation.EUR:
      return <EUIcon className={classIcon} />;
    case RateAbbreviation.CHF:
      return <SwissIcon className={classIcon} />;
    case RateAbbreviation.EUR_USD:
      return <FlagsIcon className={classIcon} />;
    case RateAbbreviation.GBP:
      return <UKIcon className={classIcon} />;
    default:
      return null;
  }
};

export const getRateText = (text: string): string | null => {
  switch (text) {
    case RateAbbreviation.USD:
      return 'US Dollar';
    case RateAbbreviation.EUR:
      return 'Euro';
    case RateAbbreviation.CHF:
      return 'Swiss franc';
    case RateAbbreviation.EUR_USD:
      return 'Euro to Dollar';
    case RateAbbreviation.GBP:
      return 'British pound';
    default:
      return null;
  }
};

export const getRateSign = (text: string): string | null => {
  switch (text) {
    case RateAbbreviation.USD:
      return '$';
    case RateAbbreviation.EUR:
      return '€';
    case RateAbbreviation.CHF:
      return 'Fr';
    case RateAbbreviation.GBP:
      return '£';
    default:
      return null;
  }
};
