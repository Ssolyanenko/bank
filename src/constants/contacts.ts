import i18next from 'i18n';
import { Contact } from 'interfaces/contact';

export const FOOTER = 'footer';
export const MAIN = 'main';

export const INDIVIDUAL: Contact = {
  name: i18next.t('contacts.individual.name'),
  description: i18next.t('contacts.individual.description'),
  localPhone: '3700',
  internationalPhone: '+16846540102',
  operationModes: [
    {
      dayOfWeek: 'MONDAY',
      openingTime: '08:00Z',
      closingTime: '20:00Z',
    },
  ],
};

export const SUPPORT: Contact = {
  name: i18next.t('contacts.support.name'),
  description: i18next.t('contacts.support.description'),
  localPhone: '3800',
  internationalPhone: '+16846540103',
  operationModes: [
    {
      dayOfWeek: 'MONDAY',
      openingTime: '08:00Z',
      closingTime: '20:00Z',
    },
  ],
};

export const MOCK_CONTACT: Contact = {
  name: 'For individuals',
  description: 'Product advice, account and transaction information',
  localPhone: '3700',
  internationalPhone: '+16846540102',
  operationModes: [
    {
      dayOfWeek: 'MONDAY',
      openingTime: '08:00Z',
      closingTime: '20:00Z',
    },
    {
      dayOfWeek: 'TUESDAY',
      openingTime: '08:00Z',
      closingTime: '20:00Z',
    },
    {
      dayOfWeek: 'WEDNESDAY',
      openingTime: '08:00Z',
      closingTime: '20:00Z',
    },
    {
      dayOfWeek: 'THURSDAY',
      openingTime: '08:00Z',
      closingTime: '20:00Z',
    },
    {
      dayOfWeek: 'FRIDAY',
      openingTime: '08:00Z',
      closingTime: '20:00Z',
    },
    {
      dayOfWeek: 'SATURDAY',
      openingTime: '08:00Z',
      closingTime: '20:00Z',
    },
    {
      dayOfWeek: 'SUNDAY',
      openingTime: '08:00Z',
      closingTime: '20:00Z',
    },
  ],
};
