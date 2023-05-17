import { FC, ReactElement, SyntheticEvent, useState, useEffect } from 'react';

import { AppLogoIcon, PasswordIconInvisible, PasswordIconVisible } from 'assets';
import { setLogoIcon } from 'helpers/setLogoIcon';
import { setLogoIconColor } from 'helpers/setLogoIconColor';
import { CardTemplate as CardTemplateProps } from 'interfaces/cardTemplate';
import { setCardBackground, getLastFourNumbers, setCardName } from 'helpers';
import { TIMER_CVV } from 'constants/numbers';
import { SEE_CARD_INFO } from 'constants/text';
import { CardTemplateDots } from './CardTemplateDots';
import classes from './CardTemplate.module.scss';

export const CardTemplate: FC<CardTemplateProps> = ({
  cardProductName,
  formattedAmount = '',
  currency = '',
  cardDate,
  paymentSystem,
  cardNumber = '1029384756483902',
  cvv = '***',
  isRadioButtonPoint = false,
  isSelectedCard = false,
}): ReactElement => {
  const [isBackSideShow, setIsBackSideShow] = useState(false);
  const [isCvvShow, setIsCvvShow] = useState(false);

  const onShowCvv = (event: SyntheticEvent): void => {
    event.stopPropagation();
    setIsCvvShow(!isCvvShow);
  };

  useEffect((): (() => void) => {
    const timer = setTimeout((): void => {
      setIsCvvShow(false);
    }, TIMER_CVV);

    return (): void => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={`${classes.cardWrappingArea} ${isRadioButtonPoint ? classes.radioButtonPointWrapper : ''}`}>
      <div
        role="presentation"
        onClick={(): void => {
          if (!isRadioButtonPoint) {
            setIsBackSideShow(!isBackSideShow);
          }
        }}
        className={`${classes.cardWrapper} ${isBackSideShow ? classes.isFlipped : ''}`}
      >
        <main
          className={` ${classes.card} ${classes[setCardBackground(cardProductName)]} ${
            isRadioButtonPoint ? classes.radioButtonPointCard : ''
          } ${!isSelectedCard && isRadioButtonPoint ? classes.notSelectedCard : ''}`}
        >
          <div className={classes.nameWrapper}>
            <h3 className={classes.name}>{setCardName(cardProductName)}</h3>
            <AppLogoIcon color={setLogoIconColor(setCardBackground(cardProductName))} className={classes.logoIcon} />
          </div>
          <div className={classes.creditNumber}>
            <CardTemplateDots />
            <CardTemplateDots />
            <CardTemplateDots />
            <div className={classes.dotNumbers}>{getLastFourNumbers(cardNumber)}</div>
          </div>
          <div className={classes.cardDate}>{cardDate}</div>
          <div className={classes.totalSumWrapper}>
            <p className={classes.totalSum}>
              {formattedAmount === SEE_CARD_INFO ? formattedAmount : `${formattedAmount} ${currency}`}
            </p>
            {setLogoIcon(paymentSystem)}
          </div>
        </main>
        <div className={` ${classes.card} ${classes[setCardBackground(cardProductName)]} ${classes.cardBack}`}>
          <div className={classes.stripe} />
          <div className={classes.cvv}>
            <div className={classes.showPassword}>
              {!isCvvShow ? (
                <>
                  <span className={classes.stars}> *** </span>
                  <span className={classes.icon}>
                    <PasswordIconInvisible onClick={onShowCvv} />
                  </span>
                </>
              ) : (
                <>
                  <span className={classes.starsActive}>{cvv}</span>
                  <span className={classes.icon}>
                    <PasswordIconVisible onClick={onShowCvv} />
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
