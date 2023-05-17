import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { CardTemplate } from 'components/_basic/CardTemplate';
import { useTypedSelector } from 'hooks';
import { getUserCards } from 'store';
import { UserCard } from 'interfaces/myCard';
import { InformationBlock } from 'components/InformationBlock';
import classes from './CreditCards.module.scss';

export const CreditCards: FC = (): ReactElement => {
  const { t } = useTranslation();
  const cards: UserCard[] = useTypedSelector(getUserCards);

  if (!cards.length)
    return (
      <div className={classes.infoBlockWrapper}>
        <InformationBlock className={classes.infoBlockText}>{t('creditCards.noCardsMessage')}</InformationBlock>
      </div>
    );

  return (
    <ul className={classes.cardsWrapper}>
      {cards.map(
        ({ id, cardProductName, formattedAmount, cardExpirationDate, cardNumber, paymentSystem, cvv, currency }) => (
          <li key={id} className={classes.cardWrapper}>
            <CardTemplate
              id={id}
              paymentSystem={paymentSystem}
              cardProductName={cardProductName}
              formattedAmount={formattedAmount}
              cardDate={cardExpirationDate}
              cardNumber={cardNumber}
              currency={currency}
              cvv={cvv}
            />
          </li>
        )
      )}
    </ul>
  );
};
