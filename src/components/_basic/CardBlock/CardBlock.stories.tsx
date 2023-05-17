import { ReactElement } from 'react';
import { ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import { CardTypes } from 'constants/cardTypes';
import { PaymentSystem } from 'constants/paymentSystem';
import { CardBlock, CardBlockProps } from 'components/_basic/CardBlock';
import { convertUnixTimestampToDate } from 'helpers';
import classes from './CardBlock.module.scss';

export default {
  title: 'CardTemplate/Block layout for Cards',
  component: CardBlock,
  argTypes: {
    cardBlockTitle: {
      type: 'string',
      defaultValue: 'Smart Debit card',
      options: ['Credit Card Billable', 'Credit Card Billable Premium', 'Smart Debit card', 'Debit Travel card'],
      control: { type: 'select' },
    },

    cardProductName: {
      type: 'string',
      defaultValue: 'Smart Debit card',
      options: ['Credit Card Billable', 'Credit Card Billable Premium', 'Smart Debit card', 'Debit Travel card'],
      control: { type: 'select' },
    },
    cardType: {
      type: 'string',
      defaultValue: CardTypes.DEBIT_SMART,
      description: 'Type of card',
      options: [CardTypes.BILLABLE, CardTypes.BILLABLE_PREMIUM, CardTypes.DEBIT_SMART, CardTypes.DEBIT_TRAVEL],
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
    hasButton: {
      type: 'boolean',
      description: 'Do we need button or not',
      defaultValue: true,
      options: [true, false],
      control: { type: 'radio' },
    },
    isCircle: {
      type: 'boolean',
      description: 'is Circle list or not',
      defaultValue: false,
      options: [true, false],
      control: { type: 'radio' },
    },
    cardNumber: {
      type: 'string',
      defaultValue: '7777',
      description: 'The last four digits of the card number',
    },
    productInfo: {
      type: 'string',
      description: 'card promotional information',
      defaultValue:
        'Free transfers by phone number up to 5,000 GBP|Up to 30% cashback in dollars for purchases|Free card service',
    },
    redirectPath: {
      type: 'string',
      description: 'temporary route path',
      defaultValue: 'somePath',
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
        component: 'Block layout for Cards',
      },
    },
  },
} as ComponentMeta<typeof CardBlock>;

interface Props extends CardBlockProps {
  cardDateStoryBook: number;
}

const Template = ({
  cardProductName,
  cardDateStoryBook,
  paymentSystem,
  cardType,
  cardNumber,
  productInfo,
  isCircle,
  hasButton,
  cvv,
}: Props): ReactElement => (
  <MemoryRouter>
    <CardBlock
      hasButton={hasButton}
      id={1}
      cardProductName={cardProductName}
      paymentSystem={paymentSystem}
      cardType={cardType}
      cvv={cvv}
      isCircle={isCircle}
      cardNumber={cardNumber}
      productInfo={productInfo}
      className={classes.cardBlockStoryBook}
      onClick={(): void => alert('Click button')}
      cardDate={convertUnixTimestampToDate(cardDateStoryBook)}
    />
  </MemoryRouter>
);

export const BlockForDebitSmart = Template.bind({});
