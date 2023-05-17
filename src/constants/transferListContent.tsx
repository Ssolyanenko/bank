import i18next from 'i18n';
import { TransferByPhoneNumberForm } from 'components';
import { CardTemplateSimpleIcon, CircledArrowsIcon, ListIcon, TransferPhoneIcon } from 'assets';

import { TransferAccordion } from 'interfaces/transferPage';

export const transferAccordionContent: TransferAccordion[] = [
  {
    id: 'panel1',
    summary: {
      icon: <TransferPhoneIcon />,
      title: i18next.t('transferListContent.titles.byPhoneNumber'),
      details: i18next.t('transferListContent.details.byPhoneNumber'),
    },
    content: <TransferByPhoneNumberForm />,
  },
  {
    id: 'panel2',
    summary: {
      icon: <CardTemplateSimpleIcon />,
      title: i18next.t('transferListContent.titles.byCardNumber'),
      details: i18next.t('transferListContent.details.byCardNumber'),
    },
    content: <span />,
  },
  {
    id: 'panel3',
    summary: {
      icon: <ListIcon />,
      title: i18next.t('transferListContent.titles.byAccountNumber'),
      details: i18next.t('transferListContent.details.byAccountNumber'),
    },
    content: <span />,
  },
  {
    id: 'panel4',
    summary: {
      icon: <CircledArrowsIcon />,
      title: i18next.t('transferListContent.titles.betweenYourCards'),
    },
    content: <span />,
  },
];
