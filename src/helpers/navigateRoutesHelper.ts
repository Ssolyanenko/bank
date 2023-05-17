import { RoutingPaths } from 'constants/routingPaths';

export const navigateRoutesHelper = (name: string): string => {
  switch (name) {
    case 'Debit Smart card':
      return RoutingPaths.DEBIT_SMART_CARD;
    case 'Debit Travel card':
      return RoutingPaths.DEBIT_TRAVEL_CARD;
    case 'Credit Card Billable':
      return RoutingPaths.CREDIT_CARD_BILLABLE;
    case 'Credit Card Billable Premium':
      return RoutingPaths.CREDIT_CARD_BILLABLE_PREMIUM;
    default:
      return '';
  }
};
