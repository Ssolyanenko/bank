import React, { ReactElement } from 'react';
import { ComponentMeta } from '@storybook/react';

import { CardTemplate as CardTemplateProps } from 'interfaces/cardTemplate';
import { CardTemplate } from 'components/_basic/CardTemplate';
import { PaymentSystem } from 'constants/paymentSystem';
import { convertUnixTimestampToDate } from 'helpers/convertUnixTimestampToDate';

export default {
  title: 'CardTemplate/CardTemplate',
  component: CardTemplate,
  argTypes: {
    cardProductName: {
      type: 'string',
      defaultValue: 'Smart Debit card',
      options: ['Credit Card Billable', 'Credit Card Billable Premium', 'Smart Debit card', 'Debit Travel card'],
      control: { type: 'select' },
    },
    paymentSystem: {
      name: 'Visa/MasterCard',
      type: 'string',
      defaultValue: PaymentSystem.MASTER_CARD,
      description: 'Visa or MasterCard type',
      options: [PaymentSystem.MASTER_CARD, PaymentSystem.VISA],
      control: { type: 'radio' },
    },
    cardDateStoryBook: {
      type: 'number',
      description: 'The end date of card',
      defaultValue: 1663707600000,
      control: { type: 'date' },
    },
    cardNumber: {
      type: 'string',
      defaultValue: '7777',
      description: 'The last four digits of the card number',
    },
    currency: {
      type: 'string',
      defaultValue: 'GBP',
      description: 'Currency',
    },
    cvv: {
      type: 'string',
      defaultValue: '***',
      description: 'cvv code',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Cards',
      },
    },
    layout: 'centered',
  },
} as ComponentMeta<typeof CardTemplate>;

interface Props extends CardTemplateProps {
  cardDateStoryBook: number;
}

const Template = ({
  id = 1,
  cardProductName,
  paymentSystem,
  cardType,
  cardNumber,
  currency,
  cardDateStoryBook,
  cvv = '111',
}: Props): ReactElement => (
  <CardTemplate
    id={id}
    cardProductName={cardProductName}
    paymentSystem={paymentSystem}
    cardType={cardType}
    cardNumber={cardNumber}
    cardDate={convertUnixTimestampToDate(cardDateStoryBook)}
    currency={currency}
    cvv={cvv}
  />
);

export const Default = Template.bind({});
