import { Operations } from 'constants/operations';
import { CardTemplateIcon, PhoneIcon } from 'assets';

export const getIconForOperations = (text: string, className: string): JSX.Element | null => {
  switch (text) {
    case Operations.MONEY_TRANSFER_CARD:
      return <CardTemplateIcon className={className} />;
    case Operations.MONEY_TRANSFER_PHONE:
      return <PhoneIcon className={className} />;
    default:
      return null;
  }
};
