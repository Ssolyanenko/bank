import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { BackButton, CardBlock } from 'components/_basic';
import { CardNames, CardTypes } from 'constants/cardTypes';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { OrderDebitSmartCard } from 'components';
import { getDebitSmartCard, getIsDebitCardsDataLoaded, requestDebitCardsInfo } from 'store';
import { CardTemplate } from 'interfaces/cardTemplate';
import { DEBIT_CARDS } from 'constants/cardTemplates';
import classes from './DebitSmartCard.module.scss';

export const DebitSmartCard: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const isDebitCardDataLoaded = useTypedSelector(getIsDebitCardsDataLoaded);
  const debitSmartCard = useTypedSelector(getDebitSmartCard);

  // TODO: replace mock data
  const { cardNumber, cardDate } = DEBIT_CARDS.find(
    ({ cardType }): boolean => cardType === CardTypes.DEBIT_SMART
  ) as CardTemplate;

  useEffect((): void => {
    dispatch(requestDebitCardsInfo());
  }, [dispatch]);

  if (!isDebitCardDataLoaded) {
    return <div />; // TODO: add the loader
  }

  return (
    <div className={classes.cardWrapper}>
      <div className={classes.buttonWrapper}>
        <BackButton handleBack={(): void => navigate(-1)}>{t('buttonNames.back')}</BackButton>
      </div>

      <div className={classes.cardInfoWrapper}>
        <h2 className={classes.title}>{CardNames.DEBIT_SMART}</h2>
        <CardBlock
          id={debitSmartCard.id}
          paymentSystem={debitSmartCard.paymentSystem}
          cardType={debitSmartCard.cardType}
          cardProductName={debitSmartCard.cardProductName}
          cardNumber={cardNumber}
          cardDate={cardDate}
          productInfo={debitSmartCard.productInfo}
          hasButton={false}
        />
        <OrderDebitSmartCard />
      </div>
    </div>
  );
};
