import { FC, useState, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { BackButton, CloseButton, ModalConfirmation, CardBlock } from 'components/_basic';
import { ExclamationMarkIcon } from 'assets';
import { Size } from 'interfaces/common/componentsSettings';
import { PAGE_TITLE } from 'constants/titles';
import { CardMockValues } from 'constants/cardMockValues';
import { CardTypes } from 'constants/cardTypes';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { navigateRoutesHelper, setCardType } from 'helpers';
import { getCreditCards, getIsVip, requestCreditCardsInfo } from 'store';
import classes from './CreditCardsPage.module.scss';

export const CreditCardsPage: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const creditCards = useTypedSelector(getCreditCards);
  const isVip = useTypedSelector(getIsVip);

  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect((): void => {
    dispatch(requestCreditCardsInfo());
  }, [dispatch]);

  const handleIsVipClick = (cardType: string, path: string): void => {
    if (cardType === CardTypes.BILLABLE_PREMIUM && !isVip) setIsModalOpened(true);
    else navigate(path);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <BackButton handleBack={(): void => navigate(-1)}>{t('buttonNames.back')}</BackButton>
        <div>
          <h2 className={classes.pageTitle}>{PAGE_TITLE.creditCards}</h2>
          <ul className={classes.cardsList}>
            {creditCards?.map(
              ({ id, cardProductName, cardType, paymentSystem, productInfo }): ReactElement => (
                <li className={classes.cardItem} key={id}>
                  <CardBlock
                    cardProductName={cardProductName}
                    cardDate={CardMockValues.CARD_DATE}
                    paymentSystem={paymentSystem}
                    cardType={cardType}
                    cardNumber={CardMockValues.CARD_NUMBER}
                    productInfo={productInfo}
                    id={id}
                    key={id}
                    hasButton
                    onClick={(): void =>
                      handleIsVipClick(setCardType(cardProductName), navigateRoutesHelper(cardProductName))
                    }
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {!isVip && (
        <ModalConfirmation isOpened={isModalOpened} onClose={(): void => setIsModalOpened(false)} maxWidth="600px">
          <div className={classes.modalCloseButton}>
            <CloseButton size={Size.MEDIUM} onClick={(): void => setIsModalOpened(false)} />
          </div>
          <ExclamationMarkIcon className={classes.modalIcon} />
          <div className={classes.modalText}>Sorry, this card is available only for VIP clients</div>
        </ModalConfirmation>
      )}
    </>
  );
};
