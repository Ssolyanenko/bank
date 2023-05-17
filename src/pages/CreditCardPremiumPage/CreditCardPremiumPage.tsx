import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { BackButton, CardBlock } from 'components/_basic';
import { OrderCreditCardPremium } from 'components';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { CardNames, CardTypes } from 'constants/cardTypes';
import { getCreditPremiumCard, getIsCreditCardsDataLoaded, requestCreditCardsInfo } from 'store';
import { CardTemplate } from 'interfaces/cardTemplate';
import { CREDIT_CARDS_BILLABLE } from 'constants/cardTemplates';
import classes from './CreditCardPremiumPage.module.scss';

export const CreditCardPremiumPage: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  // TODO: replace mock data
  const { cardNumber, cardDate } = CREDIT_CARDS_BILLABLE.find(
    ({ cardType }): boolean => cardType === CardTypes.BILLABLE_PREMIUM
  ) as CardTemplate;
  const creditPremiumCard = useTypedSelector(getCreditPremiumCard);
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
        <BackButton handleBack={(): void => navigate(-1)}>{t('buttonNames.back')}</BackButton>
      </div>
      <div>
        <h2 className={classes.pageTitle}>{CardNames.BILLABLE_PREMIUM}</h2>
        <CardBlock
          id={creditPremiumCard.id}
          cardProductName={creditPremiumCard.cardProductName}
          cardType={creditPremiumCard.cardType}
          paymentSystem={creditPremiumCard.paymentSystem}
          productInfo={creditPremiumCard.productInfo}
          cardDate={cardDate}
          cardNumber={cardNumber}
          hasButton={false}
        />
        <OrderCreditCardPremium />
      </div>
    </div>
  );
};
