import React, { FC, useState, useEffect, ReactElement } from 'react';

import { History, Pagination, FilterHistoryForm } from 'components';
import { getEntriesInfo, requestTransactions } from 'store';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { TransactionsFilters } from 'interfaces/Transactions';
import { DEFAULT_FILTERS_VALUES } from 'constants/transactionsHistory';
import classes from './CardHistory.module.scss';

interface Props {
  userCardId: number;
}

export const CardHistory: FC<Props> = ({ userCardId }): ReactElement => {
  const dispatch = useTypedDispatch();
  const { totalEntries, currentPage } = useTypedSelector(getEntriesInfo);

  const [filters, setFilters] = useState<TransactionsFilters>(DEFAULT_FILTERS_VALUES);
  const [isLoading, setIsLoading] = useState(false);

  const { titleFilter } = filters;

  useEffect((): void => {
    setIsLoading(true);
    dispatch(requestTransactions(userCardId, currentPage, filters, setIsLoading));
  }, [userCardId, currentPage, filters, dispatch]);

  return (
    <div className={classes.pageWrapper}>
      <div className={classes.filter}>
        <FilterHistoryForm
          titleFilter={titleFilter}
          filters={filters}
          setFilters={setFilters}
          userCardId={userCardId}
        />
      </div>
      <History isLoading={isLoading} />
      {totalEntries !== 0 && <Pagination />}
    </div>
  );
};
