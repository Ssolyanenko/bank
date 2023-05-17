import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { ActivateBlockCardIcon } from 'assets';
import { CardManageNames } from 'constants/cardManageText';
import { ActivateBlockCardModal } from 'components/ActivateBlockCardModal';
import { ACTIVATE_BLOCK_CARD_CONTENT } from 'constants/cardActivateBlockText';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { GET_USER_CARD_DETAILS_BY_ID } from 'constants/requestUrls';
import { getIsActivatedBlockCard, requestUserCardDetailsById } from 'store';
import { ResponseModal } from 'components/ResponseModal';
import classes from './ActivateBlockCard.module.scss';

interface Props {
  hasCardStatus: boolean;
  cardId: number;
}

export const ActivateBlockCard: FC<Props> = ({ hasCardStatus, cardId }): ReactElement => {
  const dispatch = useTypedDispatch();

  const [isActivateBlockCardModalOpened, setIsActivateBlockCardModalOpened] = useState(false);
  const [isResponseModalOpened, setIsResponseModalOpened] = useState(false);
  const [isCardBlock, setIsCardBlock] = useState(false);

  const { status, error, message } = useTypedSelector(getIsActivatedBlockCard);

  const { text, buttonName, terms } = hasCardStatus
    ? ACTIVATE_BLOCK_CARD_CONTENT.blocked
    : ACTIVATE_BLOCK_CARD_CONTENT.activate;

  const activateBlockCardHandler = (): void => {
    setIsActivateBlockCardModalOpened(false);
    setIsResponseModalOpened(true);
  };

  useEffect((): void => {
    dispatch(requestUserCardDetailsById(GET_USER_CARD_DETAILS_BY_ID(cardId)));
  }, [cardId, dispatch, isCardBlock]);

  return (
    <Box>
      <Box
        className={classes.iconContainer}
        onClick={(): void => {
          setIsActivateBlockCardModalOpened(true);
        }}
      >
        <ActivateBlockCardIcon />
      </Box>
      <Box className={classes.text}>{hasCardStatus ? CardManageNames.BLOCK_CARD : CardManageNames.ACTIVATE_CARD}</Box>

      <ActivateBlockCardModal
        isOpen={isActivateBlockCardModalOpened}
        handleClose={(): void => setIsActivateBlockCardModalOpened(false)}
        text={text}
        buttonName={buttonName}
        activateBlockCardHandler={activateBlockCardHandler}
        terms={terms}
        hasCardStatus={hasCardStatus}
        setIsCardBlock={setIsCardBlock}
      />
      <ResponseModal
        status={status}
        content={message || error}
        isOpened={isResponseModalOpened}
        modalCloseHandler={(): void => setIsResponseModalOpened(false)}
      />
    </Box>
  );
};
