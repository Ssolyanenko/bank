import {
  ConsultationIcon,
  DollarIcon,
  ExoticCurrencyIcon,
  GetIcon,
  InsuranceIcon,
  PayIcon,
  RampIcon,
  TopOnIcon,
  TopOnWithoutCardIcon,
  TransferIcon,
} from 'assets';
import { BranchType } from 'constants/branchType';
import { IconText } from 'constants/text';

export const getIcon = (text: string): JSX.Element | null => {
  switch (text) {
    case IconText.CASH_WITH_DRAWAL:
      return <GetIcon />;
    case IconText.MONEY_TRANSFER:
      return <TransferIcon />;
    case IconText.TOP_UP:
      return <TopOnIcon />;
    case IconText.TOP_UP_WITHOUT_CARD:
      return <TopOnWithoutCardIcon />;
    case IconText.PAYMENT:
      return <PayIcon />;
    case IconText.CURRENCY_EXCHANGE:
      return <DollarIcon iconsColor="black" size="22px" />;
    case IconText.EXOTIC_CURRENCY_EXCHANGE:
      return <ExoticCurrencyIcon />;
    case IconText.CONSULTATION:
      return <ConsultationIcon />;
    case IconText.PANDUS:
      return <RampIcon />;
    case IconText.INSURANCE:
      return <InsuranceIcon />;
    default:
      return null;
  }
};

export const getUrlIcon = (type: string): string => {
  switch (type) {
    case BranchType.ATM:
      return 'svg/ATM.svg';
    case BranchType.BANK_BRANCH:
      return 'svg/BankBranch.svg';
    case BranchType.TERMINAL:
      return 'svg/Terminal.svg';
    default:
      return '';
  }
};
