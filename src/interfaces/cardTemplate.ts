export type CardName =
  | 'Debit Travel card'
  | 'Debit Smart card'
  | 'Credit Card Billable'
  | 'Credit Card Billable Premium'
  | 'Smart Debit card'
  | 'Smart Credit card'
  | 'Debit card'
  | 'Credit card';

export type Currency = 'GBP';

export interface CardTemplate {
  id: number;
  cardProductName: CardName;
  cardDate: string;
  paymentSystem: string;
  cardNumber: string;
  amount?: number;
  formattedAmount?: string;
  currency?: Currency;
  productInfo?: string;
  vipOnly?: boolean;
  cardType?: string;
  cvv?: string;
  cardBlockTitle?: string;
  isRadioButtonPoint?: boolean;
  isSelectedCard?: boolean;
}

export interface CardProducts extends CardTemplate {
  redirectPath: string;
}
