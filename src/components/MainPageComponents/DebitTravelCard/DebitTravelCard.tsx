import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { useTypedDispatch, useTypedSelector } from 'hooks';
import { OrderDebitTravelCard } from 'components';
import { BackButton, CardBlock } from 'components/_basic';
import { CardNames, CardTypes } from 'constants/cardTypes';
import { getDebitTravelCard, getIsDebitCardsDataLoaded, requestDebitCardsInfo } from 'store';
import { DEBIT_CARDS } from 'constants/cardTemplates';
import { CardTemplate } from 'interfaces/cardTemplate';
import classes from './DebitTravelCard.module.scss';

export const DebitTravelCard: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  // TODO: replace mock data
  const { cardNumber, cardDate } = DEBIT_CARDS.find(
    ({ cardType }): boolean => cardType === CardTypes.DEBIT_TRAVEL
  ) as CardTemplate;

  const isDebitCardsDataLoaded = useTypedSelector(getIsDebitCardsDataLoaded);
  const debitTravelCard = useTypedSelector(getDebitTravelCard);

  useEffect((): void => {
    dispatch(requestDebitCardsInfo());
  }, [dispatch]);

  if (!isDebitCardsDataLoaded) {
    return <div />; // TODO: add the loader
  }

  return (
    <div className={classes.debitTravelWrapper}>
      <BackButton handleBack={(): void => navigate(-1)}>{t('buttonNames.back')}</BackButton>
      <div className={classes.debitTravelCard}>
        <h2 className={classes.title}>{CardNames.DEBIT_TRAVEL}</h2>
        <CardBlock
          cardProductName={debitTravelCard.cardProductName}
          paymentSystem={debitTravelCard.paymentSystem}
          cardType={debitTravelCard.cardType}
          productInfo={debitTravelCard.productInfo}
          id={debitTravelCard.id}
          hasButton={false}
          cardNumber={cardNumber}
          cardDate={cardDate}
        />
        <OrderDebitTravelCard />
      </div>
    </div>
  );
};
