import { Store } from 'store';
import { mockBranch } from 'constants/branch';
import { FetchStatus } from './fetchStatus';
import { MAX_AMOUNT } from './transactionsHistory';
import { IDLE } from './text';

const mockInitialState: Store = {
  branchData: {
    branches: [mockBranch],
  },
  cityData: {
    city: 'London',
  },
  cardsData: {
    cardOrderTemplateSuccess: {
      text: 'Something went wrong. Please try again.',
      status: 'error',
    },
    debitCardOrderTemplateSuccess: {
      text: '',
      status: IDLE,
    },
    isUnlocked: true,
    cards: {
      credit: {
        cardsInfo: [],
        isCardsDataLoaded: false,
        error: '',
      },
      debit: {
        cardsInfo: [],
        isCardsDataLoaded: false,
        error: '',
      },
    },
    cardsActivation: {
      activationStatus: '',
      error: '',
    },
    changeCardPinCode: {
      status: '',
      error: '',
    },
    activateBlockCard: {
      status: IDLE,
      message: '',
      error: '',
    },
    userCards: [],
    cardApplications: [],
    fetchStatus: FetchStatus.IDLE,
    userCard: null,
    cardTransactionLimit: {
      message: '',
      transactionLimit: 5000,
    },
  },
  userData: {
    userLogin: {
      isAuth: false,
      isSMSAuth: false,
      isSMSBanState: false,
      banTimeUntil: '',
      isSMSOpen: false,
      isFirstLogin: false,
      errorMessage: '',
      token: '',
    },
    userAccount: {
      login: '',
      firstName: '',
      lastName: '',
      passport: '',
      phone: '',
      email: '',
      isVip: false,
      enabledNotificationSettings: [],
    },
    isSend: false,
    errorMessage: '',
    passwordRecovery: {
      isCheckPassport: false,
      isCheckSms: false,
      isSMSBanState: false,
      isChangePassword: false,
      blockedUntil: null,
      phoneUser: '',
      errorMessage: '',
    },
    _persist: {
      version: 1,
      rehydrated: true,
    },
    securityChangePassword: {
      isSMSOpen: false,
      errorMessage: '',
    },
    fetchStatus: FetchStatus.IDLE,
  },
  transactionsData: {
    maxAmount: MAX_AMOUNT,
    transactionsInfo: {
      entriesOnPage: 10,
      totalEntries: 100,
      currentPage: 3,
      totalPages: 10,
      transactions: [],
    },
  },
};

export { mockInitialState };
