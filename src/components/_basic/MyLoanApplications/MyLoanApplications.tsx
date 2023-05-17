import React, { FC } from 'react';

import classes from './MyLoanApplications.module.scss';

interface Props {
  id: number;
  loanTitle: string;
  period: number;
  totalSum: string;
  status: string;
}

export const MyLoanApplications: FC<Props> = ({ id, loanTitle, period, totalSum, status }) => (
  <div className={classes.loanAppWrapper}>
    <div className={classes.loanCommonInf}>
      {id}.
      <div className={classes.title}>
        {loanTitle}
        <div className={classes.period}>
          {period / 12} years ({period} months)
        </div>
      </div>
    </div>
    <div>${totalSum}</div>
    <div className={classes.statusWrapper}>
      Status: <span className={`${classes[status]}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </div>
  </div>
);
