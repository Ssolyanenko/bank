import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
  ModalConfirmation,
  CloseButton,
  CardTemplate,
  PrimaryButton,
  Tabs,
  BackButton,
  Loader,
} from 'components/_basic';
import { CardStatement, CardInfo, CardHistory, CardManage } from 'components';
import { getUserCard, requestUserCardDetailsById, requestUserCards, resetUserCard } from 'store';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { ACTIVE_STATUS, BLOCKED_STATUS, ButtonNames } from 'constants/text';
import { MAX_WIDTH } from 'constants/numbers';
import { RoutingPaths } from 'constants/routingPaths';
import { GET_USER_CARD_DETAILS_BY_ID, GET_USER_CARDS_URL } from 'constants/requestUrls';
import classes from './CardDetails.module.scss';

export const CardDetails: FC = (): ReactElement => {
  const { cardId = '' } = useParams();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { t } = useTranslation();

  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect((): (() => void) => {
    dispatch(requestUserCardDetailsById(GET_USER_CARD_DETAILS_BY_ID(cardId)));
    window.scrollTo(0, 0);

    return (): void => dispatch(resetUserCard());
  }, [cardId, dispatch]);

  const handleBack = (): void => {
    dispatch(requestUserCards(GET_USER_CARDS_URL));
    navigate(`/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.CARDS}`);
  };

  const userCardDetails = useTypedSelector(getUserCard);

  if (!userCardDetails) return <Loader />;

  const {
    id,
    cardProductName,
    formattedAmount,
    currency,
    paymentSystem,
    cardNumber,
    expirationDate,
    cvv,
    isActive,
    isBlocked,
  } = userCardDetails;

  const hasCardStatus = isActive && !isBlocked;
  const blockedClass = hasCardStatus ? '' : classes.blocked;
  const cardStatusText = hasCardStatus ? ACTIVE_STATUS : BLOCKED_STATUS;

  return (
    <Box className={classes.cardContainer}>
      <BackButton handleBack={handleBack} className={classes.backButton}>
        {t('buttonNames.back')}
      </BackButton>
      <Box className={classes.cardWrapper}>
        <Box className={classes.cardBlock}>
          <CardTemplate
            id={id}
            formattedAmount={formattedAmount}
            currency={currency}
            cardDate={expirationDate}
            paymentSystem={paymentSystem}
            cardNumber={cardNumber}
            cvv={cvv}
            cardProductName={cardProductName}
          />
          <div className={classes.cardInfo}>
            <h3 className={classes.cardTitle}>{cardProductName}</h3>
            <div className={classes.statusContainer}>
              <span className={`${classes.statusIndents} ${blockedClass}`}> {cardStatusText} </span>
            </div>
            <PrimaryButton
              className={classes.cardStatementButton}
              name={ButtonNames.CARD_STATEMENT}
              onClick={(): void => setIsModalOpened(true)}
              type={ButtonType.BUTTON}
            >
              {t('buttonNames.cardStatement')}
            </PrimaryButton>
          </div>
        </Box>
        <Box className={classes.tabsBlock}>
          <Tabs className={classes.cardTabs}>
            <Box title="Info" className={classes.cardInfo}>
              <CardInfo />
            </Box>
            <Box title="History">
              <CardHistory userCardId={id} />
            </Box>
            <Box title="Manage">
              <Box className={classes.cardManage}>
                <CardManage hasCardStatus={hasCardStatus} cardId={id} />
              </Box>
            </Box>
          </Tabs>
        </Box>
      </Box>

      <ModalConfirmation isOpened={isModalOpened} maxWidth={MAX_WIDTH} onClose={(): void => setIsModalOpened(false)}>
        <Box className={classes.modalCloseButton}>
          <CloseButton
            className={classes.closeButton}
            size={Size.MEDIUM}
            onClick={(): void => setIsModalOpened(false)}
          />
        </Box>
        <CardStatement />
      </ModalConfirmation>
    </Box>
  );
};
