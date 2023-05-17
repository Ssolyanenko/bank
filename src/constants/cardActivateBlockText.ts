import i18next from 'i18next';

export const ACTIVATE_BLOCK_CARD_CONTENT = {
  blocked: {
    terms: i18next.t('activateBlockCardContent.blocked.terms'),
    text: i18next.t('activateBlockCardContent.blocked.text'),
    buttonName: i18next.t('activateBlockCardContent.blocked.buttonName'),
  },
  activate: {
    terms: i18next.t('activateBlockCardContent.activate.terms'),
    text: i18next.t('activateBlockCardContent.activate.text'),
    buttonName: i18next.t('activateBlockCardContent.activate.buttonName'),
  },
  status: i18next.t('activateBlockCardContent.status'),
};

export enum CardActivateBlock {
  ACTIVATE_BLOCK_CARD_REQUEST = 'ACTIVATE_BLOCK_CARD_REQUEST',
  ACTIVATE_BLOCK_CARD_SUCCESS = 'ACTIVATE_BLOCK_CARD_SUCCESS',
  ACTIVATE_BLOCK_CARD_ERROR = 'ACTIVATE_BLOCK_CARD_ERROR',
}

export enum ChangeCardStatus {
  IS_TERMS_AGREED = 'isChangeStatusAgreed',
}
