export interface Branch {
  id: number;
  type: string;
  number: number;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  cashWithDrawal: boolean;
  moneyTransfer: boolean;
  topUp: boolean;
  topUpWithoutCard: boolean;
  payment: boolean;
  currencyExchange: boolean;
  pandus: boolean;
  exoticCurrencyExchange: boolean;
  consultation: boolean;
  insurance: boolean;
  operationModes: [
    {
      dayOfWeek: string;
      openingTime: string;
      closingTime: string;
      launchBreakBeginning?: string;
      launchBreakEnd?: string;
    }
  ];
}
