import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CARDS } from 'constants/cardTemplates';
import { CardMockValues } from 'constants/cardMockValues';
import { CardBlock } from 'components/_basic';
import classes from './CardProducts.module.scss';

export const CardProducts: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={classes.debitCardsWrapper}>
      <h2 className={classes.title}>Card Products</h2>
      <ul className={classes.cardBlockWrapper}>
        {CARDS.map(({ id, cardProductName, paymentSystem, cardType, productInfo, redirectPath }) => (
          <li key={id} className={classes.cardBlock}>
            <CardBlock
              id={id}
              cardProductName={cardProductName}
              paymentSystem={paymentSystem}
              cardDate={CardMockValues.CARD_DATE}
              cardType={cardType}
              productInfo={productInfo}
              cardNumber={CardMockValues.CARD_NUMBER}
              hasButton
              buttonText={t('buttonNames.learnMore')}
              isCircle
              onClick={(): void => navigate(redirectPath)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
