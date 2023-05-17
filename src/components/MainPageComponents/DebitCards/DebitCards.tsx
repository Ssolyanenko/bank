import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useTypedDispatch, useTypedSelector } from 'hooks';
import { BackButton, CardBlock } from 'components/_basic';
import { navigateRoutesHelper } from 'helpers';
import { getDebitCards, requestDebitCardsInfo } from 'store';
import { CardMockValues } from 'constants/cardMockValues';
import classes from './DebitCards.module.scss';

export const DebitCards: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const debitCards = useTypedSelector(getDebitCards);

  useEffect((): void => {
    dispatch(requestDebitCardsInfo());
  }, [dispatch]);

  return (
    <div className={classes.mainWrapper}>
      <BackButton
        handleBack={(): void => {
          navigate(-1);
        }}
      >
        {t('buttonNames.back')}
      </BackButton>
      <div className={classes.debitCardsWrapper}>
        <div className={classes.title}>{t('debitCards.title')}</div>
        <ul className={classes.cardBlockWrapper}>
          {debitCards?.map(
            ({ id, cardProductName, paymentSystem, cardType, productInfo }): ReactElement => (
              <li key={id} className={classes.cardBlock}>
                <CardBlock
                  id={id}
                  cardProductName={cardProductName}
                  cardDate={CardMockValues.CARD_DATE}
                  paymentSystem={paymentSystem}
                  cardType={cardType}
                  productInfo={productInfo}
                  cardNumber={CardMockValues.CARD_NUMBER}
                  hasButton
                  onClick={(): void => navigate(navigateRoutesHelper(cardProductName))}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
