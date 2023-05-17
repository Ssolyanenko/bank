import { FC, ReactElement } from 'react';

import { CardTemplate, RadioButtonsGroup } from 'components/_basic';
import { getLastFourNumbers } from 'helpers';
import { RadioButtonsInfo } from 'interfaces/creditCardPremium';
import { UserCard } from 'interfaces/myCard';
import { MODAL_RADIO_BUTTONS_GROUP_NAME } from 'constants/transferFormsContent';
import classes from './PaymentCards.module.scss';

interface Props {
  myCardsList: UserCard[];
  handleSelectRadioButton(value: string): void;
  selectedValue: string;
}

export const PaymentCards: FC<Props> = ({ myCardsList, handleSelectRadioButton, selectedValue }): ReactElement => {
  const radioGroupArray: RadioButtonsInfo[] = [];
  myCardsList.forEach(
    ({ id, cardNumber, cardProductName, amount, cardExpirationDate, paymentSystem, currency, cvv }, index) => {
      const isSelectedCard: boolean = !selectedValue || cardNumber === selectedValue;
      radioGroupArray[index] = {
        id,
        value: cardNumber,
        label: (
          <>
            <CardTemplate
              id={id}
              cardProductName={cardProductName}
              amount={amount}
              cardDate={cardExpirationDate}
              paymentSystem={paymentSystem}
              cardNumber={cardNumber}
              currency={currency}
              cvv={cvv}
              isRadioButtonPoint
              isSelectedCard={isSelectedCard}
            />
            <div className={`${classes.cardInfo} ${!isSelectedCard ? classes.notSelectedCard : ''}`}>
              <span className={classes.cardTitle}>{paymentSystem.toLowerCase()} - </span>
              <span>**** **** **** {getLastFourNumbers(cardNumber)}</span>
            </div>
          </>
        ),
      };
    }
  );

  return (
    <div className={classes.cardsWrapper}>
      <RadioButtonsGroup
        radioGroupArray={radioGroupArray}
        name={MODAL_RADIO_BUTTONS_GROUP_NAME}
        isModalChooseCard
        onChange={handleSelectRadioButton}
        selectedValue={selectedValue}
      />
    </div>
  );
};
