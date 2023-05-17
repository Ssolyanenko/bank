import { FC, ReactElement, useState } from 'react';
import { getUserCards } from 'store';
import { useTypedSelector } from 'hooks';
import { useTranslation } from 'react-i18next';

import { Button, CloseButton, Modal } from 'components/_basic';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { PaymentCards } from 'components';
import { TransferFormsNames } from 'constants/transferFormsContent';
import { CardInformationForTransfer } from 'interfaces/transferPage';
import { getLastFourNumbers } from 'helpers';
import classes from './ModalChoosePaymentCard.module.scss';

interface Props {
  isOpen: boolean;
  handleClose(): void;
  selectedValue: string;
  setFieldValue(field: string, value: string | CardInformationForTransfer, shouldValidate?: boolean): void;
}

const { MY_CARD, CARD_INFORMATION } = TransferFormsNames;

export const ModalChoosePaymentCard: FC<Props> = ({
  isOpen,
  handleClose,
  setFieldValue,
  selectedValue,
}): ReactElement => {
  const { t } = useTranslation();
  const cards = useTypedSelector(getUserCards);

  const [isDisabled, setIsDisabled] = useState(true);
  const [chosenCard, setChosenCard] = useState(selectedValue);

  const getCardInformationForTransfer = (value: string): CardInformationForTransfer => {
    const card = cards.find(({ cardNumber }) => cardNumber === value);

    if (card) {
      const { id, cardNumber, cardProductName } = card;

      return { id, cardNumber, cardProductName };
    }

    return { id: 0, cardNumber: '', cardProductName: '' };
  };

  const changeValueForShowInField = (value: string): string => {
    const { cardNumber, cardProductName } = getCardInformationForTransfer(value);

    return `${cardProductName} - ${getLastFourNumbers(cardNumber)}`;
  };

  const handleSelectRadioButton = (value: string): void => {
    setIsDisabled(false);
    setChosenCard(value);
  };
  const closeAndResetChoice = (): void => {
    setChosenCard(selectedValue);

    if (!selectedValue) {
      setIsDisabled(true);
    }
    handleClose();
  };

  const handleSubmit = (): void => {
    setFieldValue(MY_CARD, changeValueForShowInField(chosenCard));
    setFieldValue(CARD_INFORMATION, getCardInformationForTransfer(chosenCard));
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} handleClose={closeAndResetChoice}>
      <div className={classes.popup}>
        <CloseButton className={classes.closeButton} size={Size.MEDIUM} onClick={closeAndResetChoice} />
        <div className={classes.modalContentWrapper}>
          <h4 className={classes.title}>Choose your payment card</h4>
          <PaymentCards
            myCardsList={cards}
            handleSelectRadioButton={handleSelectRadioButton}
            selectedValue={chosenCard}
          />
          <Button className={classes.button} type={ButtonType.BUTTON} isDisabled={isDisabled} onClick={handleSubmit}>
            {t('buttonNames.continue')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
