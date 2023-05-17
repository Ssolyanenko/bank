import { Branch } from 'interfaces/branch';

export enum BranchActions {
  GET_BRANCH_REQUEST = 'GET_BRANCH_REQUEST',
  GET_BRANCH_SUCCESS = 'GET_BRANCH_SUCCESS',
  GET_BRANCH_ERROR = 'GET_BRANCH_ERROR',
  SET_BRANCH_REQUEST = 'SET_BRANCH_REQUEST',
  SET_BRANCH_SUCCESS = 'SET_BRANCH_SUCCESS',
  SET_BRANCH_ERROR = 'SET_BRANCH_ERROR',
}

export const mockBranch: Branch = {
  id: 1,
  type: 'ATM',
  number: 11,
  city: 'London',
  address: '2 Warple Way',
  latitude: 51.5498969,
  longitude: -0.1535568,
  cashWithDrawal: true,
  moneyTransfer: true,
  topUp: true,
  topUpWithoutCard: true,
  payment: true,
  currencyExchange: false,
  pandus: false,
  exoticCurrencyExchange: false,
  consultation: false,
  insurance: false,
  operationModes: [
    {
      dayOfWeek: 'MONDAY',
      openingTime: '00:00Z',
      closingTime: '00:00Z',
    },
  ],
};

export const MOCK_BRANCHES: Branch[] = [
  {
    id: 1,
    type: 'ATM',
    number: 11,
    city: 'London',
    address: '2 Warple Way',
    latitude: 51.5063348,
    longitude: -0.2569443,
    cashWithDrawal: true,
    moneyTransfer: true,
    currencyExchange: false,
    exoticCurrencyExchange: false,
    pandus: false,
    consultation: false,
    insurance: false,
    topUp: true,
    topUpWithoutCard: true,
    payment: true,
    operationModes: [
      {
        dayOfWeek: 'MONDAY',
        openingTime: '00:00Z',
        closingTime: '00:00Z',
      },
    ],
  },
  {
    id: 2,
    type: 'ATM',
    number: 12,
    city: 'London',
    address: '139 Gunnersbury Ln',
    latitude: 51.5024118,
    longitude: -0.2813147,
    exoticCurrencyExchange: false,
    currencyExchange: false,
    pandus: false,
    consultation: false,
    insurance: false,
    cashWithDrawal: true,
    moneyTransfer: true,
    topUp: true,
    topUpWithoutCard: true,
    payment: true,
    operationModes: [
      {
        dayOfWeek: 'MONDAY',
        openingTime: '00:00Z',
        closingTime: '00:00Z',
      },
    ],
  },
];
