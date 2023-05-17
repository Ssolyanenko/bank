export interface TransferAccordionSummary {
  icon: JSX.Element;
  title: string;
  details?: string;
}

export interface TransferAccordion {
  id: string;
  summary: TransferAccordionSummary;
  content: JSX.Element;
}

export interface ByPhoneNumberFormInitialValues {
  myCard: string;
  phoneNumber: string;
  paymentAmount: string;
  cardInformation: CardInformationForTransfer;
}

export interface ByPhoneNumberFormInitialErrors {
  phoneNumber: string;
}

export interface CardInformationForTransfer {
  id: number;
  cardNumber: string;
  cardProductName: string;
}
