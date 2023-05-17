import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { useTypedDispatch, useTypedSelector } from 'hooks';
import { getEntriesInfo, setCurrentPage } from 'store';
import { getSwitchColor, handleChangePages } from 'helpers';
import { ArrowLeftDoublePageIcon } from 'assets/ArrowLeftDoublePageIcon';
import { DOUBLE_LEFT, DOUBLE_RIGHT, LEFT, RIGHT, PaginationSwitchType } from 'constants/pagination';
import { ArrowLeftPageIcon } from 'assets/ArrowLeftPageIcon';
import { ArrowRightPageIcon, ArrowRightDoublePageIcon } from 'assets';
import classes from './Pagination.module.scss';

export const Pagination: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useTypedDispatch();
  const { entriesOnPage, totalEntries, currentPage, totalPages } = useTypedSelector(getEntriesInfo);

  const changePages = (type: PaginationSwitchType): void => {
    const newPageNumber = handleChangePages(type, currentPage, totalPages);

    if (newPageNumber !== currentPage) {
      dispatch(setCurrentPage(newPageNumber));
    }
  };

  return (
    <div className={classes.pagination}>
      <div className={classes.records}>
        <span className={classes.textPages}>{t('pagination.quantity', { entriesOnPage, totalEntries })}</span>
      </div>
      <div className={classes.page}>
        <div className={classes.arrowsLeft}>
          <ArrowLeftDoublePageIcon
            className={classes.icon}
            onClick={(): void => changePages(DOUBLE_LEFT)}
            color={getSwitchColor(DOUBLE_LEFT, currentPage, totalPages)}
          />
          <ArrowLeftPageIcon
            className={classes.icon}
            onClick={(): void => changePages(LEFT)}
            color={getSwitchColor(LEFT, currentPage, totalPages)}
          />
        </div>
        <div>
          <span className={classes.textPages}>{t('pagination.currentPage', { currentPage, totalPages })}</span>
        </div>
        <div className={classes.arrowsRight}>
          <ArrowRightPageIcon
            className={classes.icon}
            onClick={(): void => changePages(RIGHT)}
            color={getSwitchColor(RIGHT, currentPage, totalPages)}
          />
          <ArrowRightDoublePageIcon
            className={classes.icon}
            onClick={(): void => changePages(DOUBLE_RIGHT)}
            color={getSwitchColor(DOUBLE_RIGHT, currentPage, totalPages)}
          />
        </div>
      </div>
    </div>
  );
};
