import { FC, ReactElement } from 'react';
import i18next from 'i18n';

import { PrimaryButton, CardTemplate } from 'components/_basic';
import { toDo } from 'helpers';
import { CardTemplate as CardTemplateProps } from 'interfaces/cardTemplate';
import classes from './CardBlock.module.scss';

export interface CardBlockProps extends CardTemplateProps {
  hasButton: boolean;
  buttonText?: string;
  isCircle?: boolean;
  onClick?(): void;
  className?: string;
}

export const CardBlock: FC<CardBlockProps> = ({
  id,
  paymentSystem,
  cardProductName,
  amount,
  cardDate,
  productInfo,
  cardNumber,
  cvv,
  hasButton,
  buttonText = i18next.t('cardBlock.orderACard'),
  isCircle = false,
  className,
  onClick = toDo,
}): ReactElement => (
  <section key={id} className={`${classes.cardBlockWrapper} ${className}`}>
    <CardTemplate
      id={id}
      key={id}
      cardProductName={cardProductName}
      paymentSystem={paymentSystem}
      amount={amount}
      cardDate={cardDate}
      cardNumber={cardNumber}
      cvv={cvv}
    />
    <div className={classes.cardInfoWrapper}>
      {hasButton && <h5 className={classes.cardInfoTitle}>{cardProductName}</h5>}
      <ul className={`${classes.cardInfo} ${isCircle ? classes.removeCircle : ''} `}>
        {productInfo?.split('|').map(
          (infoItem: string, index: number): ReactElement => (
            <li key={index + infoItem}>{infoItem}</li>
          )
        )}
      </ul>
      {hasButton && (
        <PrimaryButton className={classes.primaryButton} onClick={onClick}>
          {buttonText}
        </PrimaryButton>
      )}
    </div>
  </section>
);
