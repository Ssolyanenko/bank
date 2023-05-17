import i18next from 'i18n';

export const LOCK_CARD_MODAL_CONTENT = {
  blocked: {
    title: i18next.t('lockCardModalContent.blocked.title'),
    text: i18next.t('lockCardModalContent.blocked.text'),
    buttonName: i18next.t('lockCardModalContent.blocked.buttonName'),
  },
  unlocked: {
    title: i18next.t('lockCardModalContent.unlocked.title'),
    text: i18next.t('lockCardModalContent.unlocked.text'),
    buttonName: i18next.t('lockCardModalContent.unlocked.buttonName'),
  },
};

export enum LockCardActions {
  UNLOCK_CARD = 'UNLOCK_CARD',
  BLOCK_CARD = 'BLOCK_CARD',
}
