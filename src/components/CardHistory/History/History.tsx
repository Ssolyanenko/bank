import React, { FC, ReactElement } from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { useTypedSelector } from 'hooks';
import { getTransactions } from 'store';
import { Loader } from 'components/_basic';
import { setTimeToMidnight, getIconHistory, capitalize } from 'helpers';
import colors from 'styles/variables.module.scss';
import classes from './History.module.scss';

interface Props {
  isLoading: boolean;
}

export const History: FC<Props> = ({ isLoading }): ReactElement => {
  const { t } = useTranslation();
  const transactions = useTypedSelector(getTransactions);

  const getTitle = (transactionTime: string, prevTransactionTime: string | null): JSX.Element | null => {
    const todaysDate = setTimeToMidnight(new Date());
    const transactionDate = setTimeToMidnight(transactionTime);
    const prevTransactionDate = setTimeToMidnight(prevTransactionTime);

    if (prevTransactionTime && prevTransactionDate.diff(transactionDate, 'day') === 0) {
      return null;
    }

    let content = transactionDate.format('MMMM D, YYYY');

    if (todaysDate.diff(transactionDate, 'day') === 0) content = 'Today';

    if (todaysDate.diff(transactionDate, 'day') === 1) content = 'Yesterday';

    return <h4 className={classes.date}>{content}</h4>;
  };

  const getTransactionsJSX = (): ReactElement => {
    if (!transactions.length) {
      return <div className={classes.noResults}>{t('history.noResults')}</div>;
    }

    return (
      <ul className={classes.historyList}>
        {transactions.map(({ transactionTime, amountFormatted, transactionType, title, currency }, index, array) => (
          <li key={transactionTime + index} className={classes.history}>
            {getTitle(transactionTime, index !== 0 ? array[index - 1].transactionTime : null)}
            <div className={classes.transferWrapper}>
              <span className={classes.time}>{dayjs(transactionTime).format('HH:mm')}</span>
              <div className={classes.titleContainer}>
                <div className={classes.icon}>{getIconHistory(transactionType, colors.$orange)}</div>
                <div className={classes.title}>{title}</div>
              </div>
              <span className={classes.typeTransfer}>{capitalize(transactionType)}</span>
              <span className={classes.amount}>
                {amountFormatted} {currency}
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={classes.historyContainer}>{getTransactionsJSX()}</div>
    </>
  );
};
