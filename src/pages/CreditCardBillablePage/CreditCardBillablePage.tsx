import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { OrderCreditCardBillable } from 'components';
import { BackButton, CardBlock } from 'components/_basic';
import { CardNames, CardTypes } from 'constants/cardTypes';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { getCreditBillableCard, getIsCreditCardsDataLoaded, requestCreditCardsInfo } from 'store';
import { CardTemplate } from 'interfaces/cardTemplate';
import { CREDIT_CARDS_BILLABLE } from 'constants/cardTemplates';
import classes from './CreditCardBillablePage.module.scss';

export const CreditCardBillablePage: FC = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  // TODO: replace mock data
  const { cardDate, cardNumber } = CREDIT_CARDS_BILLABLE.find(
    ({ cardType }): boolean => cardType === CardTypes.BILLABLE
  ) as CardTemplate;
  const creditBillableCard = useTypedSelector(getCreditBillableCard);
  const isCreditCardsDataLoaded = useTypedSelector(getIsCreditCardsDataLoaded);

  useEffect((): void => {
    dispatch(requestCreditCardsInfo());
  }, [dispatch]);

  if (!isCreditCardsDataLoaded) {
    return <div />; // TODO: add the loader
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.backButton}>
        <BackButton handleBack={(): void => navigate(-1)}>Back</BackButton>
      </div>
      <div>
        <h2 className={classes.pageTitle}>{CardNames.BILLABLE}</h2>
        <CardBlock
          id={creditBillableCard.id}
          cardProductName={creditBillableCard.cardProductName}
          cardType={creditBillableCard.cardType}
          paymentSystem={creditBillableCard.paymentSystem}
          productInfo={creditBillableCard.productInfo}
          cardNumber={cardNumber}
          cardDate={cardDate}
          hasButton={false}
        />
        <OrderCreditCardBillable />
      </div>
    </div>
  );
};
