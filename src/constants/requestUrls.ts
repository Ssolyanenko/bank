const protocol = process.env.REACT_APP_API_USE_SSL === 'true' ? 'https' : 'http';
const apiBase = `${protocol}://${process.env.REACT_APP_API_HOSTNAME}/api/v1`;
const apiBasePassword = `${apiBase}/password`;
const apiBaseCard = `${apiBase}/card`;

export const LOGIN_URL = `${apiBase}/login`;
export const REFRESH_TOKEN_URL = `${apiBase}/refresh`;
export const SIGN_OUT_URL = `${apiBase}/logout`;

export const SMS_URL = `${apiBase}/session-code`;
export const SMS_NEW_URL = `${apiBase}/sms-code-generate`;
export const CITY_WORLD_URL = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json';
export const BANK_INFO_URL = `${apiBase}/bank-info/`;
export const CONTACTS_URL = `${apiBase}/contacts`;
export const EXCHANGE_RATE_URL = `${apiBase}/exchange-rate`;

export const TRANSACTIONS = `${apiBase}/transactions`;
export const TRANSACTIONS_MAX_AMOUNT = `${apiBase}/transactions/max-amount`;

export const CHANGE_PASSWORD_PASSPORT_URL = `${apiBasePassword}/verify-passport`;
export const CHANGE_PASSWORD_CHECK_SMS_URL = `${apiBasePassword}/check-sms`;
export const CHANGE_PASSWORD_FIRST_ENTRY = `${apiBasePassword}/first-entry`;
export const CHANGE_PASSWORD_NEW_PASSWORD_URL = `${apiBasePassword}/new`;
export const CHANGE_PASSWORD_SECURITY_SETTINGS = `${apiBasePassword}/change-from-security-settings`;

export const BLOCK_USER_CARD = `${apiBaseCard}/cards/block`;
export const ACTIVATE_USER_CARD = `${apiBaseCard}/cards/activate`;

export const USER_DATA_URL = `${apiBase}/user/data`;
export const PHONE_FIELD_VALIDATION_URL = `${USER_DATA_URL}/phones/exists`;

export const EMAIL_URL = `${apiBase}/user/data/email`;

export const CHANGE_CONTROL_QUESTION = `${apiBase}/control-question`;

export const NOTIFICATION_URL = `${apiBase}/setting/notification`;

export const DEBIT_CARDS_INFO_URL = `${apiBaseCard}?cardType=Debit`;
export const CREDIT_CARDS_INFO_URL = `${apiBaseCard}?cardType=Credit`;
export const CREDIT_CARD_ORDER = `${apiBaseCard}/order/credit`;
export const GET_USER_CARDS_URL = `${apiBaseCard}/cards/user`;
export const GET_USER_CARD_APPLICATIONS = `${apiBaseCard}/orders/user`;
export const GET_USER_CARD_DETAILS_BY_ID = (cardId: number | string): string =>
  `${apiBaseCard}/cards/user/details/${cardId}`;
export const CHANGE_CARD_PIN_URL = `${apiBaseCard}/pin`;
export const ACTIVATE_CARD_URL = `${apiBaseCard}/orders/perform`;

export const DEBIT_CARD_ORDER = `${apiBaseCard}/order/debit`;

export const TRANSACTION_LIMIT = `${apiBaseCard}/cards/transaction-limit`;

export const AMOUNT_FIELD_VALIDATION_URL = `${apiBaseCard}/validate-amount`;

export const OFFER_PATH = 'https://www.bstdb.org/Standard_terms_and_conditions.pdf';
export const CARD_HISTORY_URL = '';
export const CARD_FILTERED_HISTORY_URL = '';

export const APP_STORE_URL = 'https://www.apple.com/by/app-store/';
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps';
