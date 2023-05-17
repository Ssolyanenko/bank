import { VisaCardTemplateLogoIcon } from 'assets/VisaCardTemplateLogoIcon';
import { MasterCardLogoIcon } from 'assets/MasterCardLogoIcon';
import { PaymentSystem } from 'constants/paymentSystem';

export const setLogoIcon = (typeCard: string): JSX.Element | string => {
  switch (typeCard) {
    case PaymentSystem.MASTER_CARD:
      return <MasterCardLogoIcon />;
    case PaymentSystem.VISA:
      return <VisaCardTemplateLogoIcon />;
    default:
      return 'Unknown type of card';
  }
};
