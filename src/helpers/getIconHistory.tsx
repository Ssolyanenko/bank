import { TransferIcon, PaymentIcon } from 'assets';
import { HistoryTypes } from 'constants/historyTypes';

export const getIconHistory = (type: HistoryTypes, color: string): JSX.Element | null => {
  switch (type) {
    case HistoryTypes.TRANSFER:
      return <TransferIcon color={color} />;
    case HistoryTypes.PAYMENT:
      return <PaymentIcon color={color} />;
    default:
      return null;
  }
};
