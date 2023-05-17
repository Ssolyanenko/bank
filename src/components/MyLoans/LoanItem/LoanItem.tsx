import React, { FC, ReactElement } from 'react';

import { ArrowDownIcon } from 'assets/ArrowDownIcon';
import classes from './LoanItem.module.scss';

interface Props {
  id: number;
  loanTitle: string;
  period: number;
  totalSum: string;
}

export const LoanItem: FC<Props> = ({ id, loanTitle, period, totalSum }): ReactElement => (
  <div className={classes.loanItemWrapper}>
    <div className={classes.loanCommonInfo}>
      {id}.
      <div className={classes.title}>
        {loanTitle}
        <div className={classes.period}>
          {period / 12} years ({period} months)
        </div>
      </div>
    </div>
    <div>${totalSum}</div>
    <div className={classes.showMore}>
      Show more
      <ArrowDownIcon className={classes.arrowIcon} />
    </div>
  </div>
);
