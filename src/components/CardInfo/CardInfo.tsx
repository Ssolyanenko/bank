import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { Paper, TableRow, TableCell, TableContainer, Table, TableBody, Snackbar, SnackbarContent } from '@mui/material';

import { getUserCard, requestUserCardDetailsById } from 'store';
import { PasswordIconInvisible, PasswordIconVisible, CopyToClipboardIcon } from 'assets';
import { UserCardDetails } from 'interfaces/myCard';
import { TIMER_CVV } from 'constants/numbers';
import { HIDDEN_CVV } from 'constants/text';
import { COPIED_TO_CLIPBOARD_TITLE } from 'constants/titles';
import { GET_USER_CARD_DETAILS_BY_ID } from 'constants/requestUrls';
import { CardInfoContent } from 'constants/cardInfoContent';
import classes from './CardInfo.module.scss';

export const CardInfo: FC = (): ReactElement => {
  const { cardId } = useParams();
  const dispatch = useTypedDispatch();

  const [isCvvShow, setIsCvvShow] = useState(false);
  const [message, setMessage] = useState('');

  useEffect((): void => {
    dispatch(requestUserCardDetailsById(GET_USER_CARD_DETAILS_BY_ID(cardId || '')));
  }, [cardId, dispatch]);

  const userCardInfo = useTypedSelector(getUserCard) || ({} as UserCardDetails);

  const {
    formattedAmount,
    activationTime,
    expirationDate,
    cardHolder,
    cardNumber,
    cvv,
    fullAccountNumber,
    shortAccountNumber,
    loanAmount,
    loanPeriod,
    interestRate,
    payableMonthly,
    nextPaymentDueOn,
    repaidAmount,
    currency,
  } = userCardInfo;

  const onShowCvv = (): void => {
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

  const copyToClipboard = async (text: string, label: string): Promise<void> => {
    await navigator.clipboard.writeText(text);
    setMessage(`${label} ${COPIED_TO_CLIPBOARD_TITLE}`);
  };

  const creditData = [
    { name: CardInfoContent.BALANCE, value: `${formattedAmount} ${currency}`, icon: null },
    { name: CardInfoContent.LOAN_AMOUNT, value: loanAmount, icon: null },
    { name: CardInfoContent.LOAN_PERIOD, value: loanPeriod, icon: null },
    { name: CardInfoContent.INTEREST_RATE, value: interestRate, icon: null },
    { name: CardInfoContent.PAYABLE_MONTHLY, value: payableMonthly, icon: null },
    { name: CardInfoContent.NEXT_PAYMENT_DUE_ON, value: nextPaymentDueOn, icon: null },
    { name: CardInfoContent.REPAID_AMOUNT, value: repaidAmount, icon: null },
    { name: CardInfoContent.ISSUED_ON, value: activationTime, icon: null },
    { name: CardInfoContent.VALID_THROUGH, value: expirationDate, icon: null },
    { name: CardInfoContent.CARD_HOLDER, value: cardHolder, icon: null },
    {
      name: CardInfoContent.CARD_NUMBER,
      value: cardNumber,
      icon: (
        <CopyToClipboardIcon
          onClick={(): Promise<void> => copyToClipboard(cardNumber, CardInfoContent.CARD_NUMBER)}
          className={classes.copyIcon}
        />
      ),
    },
    {
      name: CardInfoContent.CVV,
      value: <span className={classes.cvvValue}>{!isCvvShow ? HIDDEN_CVV : cvv}</span>,
      icon: !isCvvShow ? (
        <PasswordIconInvisible onClick={onShowCvv} className={classes.invisibleIcon} />
      ) : (
        <PasswordIconVisible onClick={onShowCvv} className={classes.visibleIcon} />
      ),
    },
    {
      name: CardInfoContent.IBAN,
      value: fullAccountNumber,
      icon: (
        <CopyToClipboardIcon
          onClick={(): Promise<void> => copyToClipboard(fullAccountNumber, CardInfoContent.IBAN)}
          className={classes.copyIcon}
        />
      ),
    },
    {
      name: CardInfoContent.ACCOUNT_NUMBER,
      value: shortAccountNumber,
      icon: (
        <CopyToClipboardIcon
          onClick={(): Promise<void> => copyToClipboard(shortAccountNumber, CardInfoContent.ACCOUNT_NUMBER)}
          className={classes.copyIcon}
        />
      ),
    },
  ];

  return (
    <>
      <TableContainer component={Paper} sx={{ borderRadius: '10px' }} variant="outlined" title="">
        <Table>
          <TableBody>
            {creditData.map(
              ({ name, value, icon }) =>
                value && (
                  <TableRow className={classes.tableRow} key={name}>
                    <TableCell className={classes.tableCellKey}>{name}</TableCell>
                    <TableCell className={classes.tableCellValue}>
                      <span className={classes.tableValue}>{value}</span>
                      {icon}
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={!!message}
        autoHideDuration={2000}
        className={classes.snackbar}
        onClose={(): void => setMessage('')}
      >
        <SnackbarContent
          className={classes.snackbarContent}
          message={<span className={classes.snackbarMessage}>{message}</span>}
        />
      </Snackbar>
    </>
  );
};
