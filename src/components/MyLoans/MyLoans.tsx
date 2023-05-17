import React, { FC, ReactElement } from 'react';

import { MY_LOANS } from 'constants/myLoans';
import { MY_LOAN_APPLICATIONS } from 'constants/myLoanApplications';
import { MyLoanApplications } from 'components/_basic/MyLoanApplications';
import { LoanItem } from './LoanItem';
import classes from './MyLoans.module.scss';

interface Props {
  isLoans?: boolean;
  isLoanApplications?: boolean;
}

export const MyLoans: FC<Props> = ({ isLoans = true, isLoanApplications = false }): ReactElement => (
  <div className={classes.myLoansWrapper}>
    <h2 className={classes.title}>My Loans</h2>
    {isLoans ? (
      <>
        <div className={classes.myLoansTable}>
          {MY_LOANS.map(({ id, name, periodInMonths, totalSum }) => (
            <LoanItem key={id + name} id={id} loanTitle={name} period={periodInMonths} totalSum={totalSum} />
          ))}
        </div>

        {isLoanApplications && (
          <div className={classes.myLoanApplicationsWrapper}>
            <h2 className={classes.title}>My Loan Applications</h2>
            <div className={classes.loansAppTable}>
              {MY_LOAN_APPLICATIONS.map(({ id, name, periodInMonths, totalSum, status }) => (
                <MyLoanApplications
                  key={id + name}
                  id={id}
                  loanTitle={name}
                  period={periodInMonths}
                  totalSum={totalSum}
                  status={status}
                />
              ))}
            </div>
          </div>
        )}
      </>
    ) : (
      <div className={classes.noLoans}>
        You don't have any loans to display for now. You may check our
        <a className={classes.link} href="#">
          Loan products
        </a>
        and
        <a className={classes.link} href="#">
          Apply for a loan
        </a>
        online
      </div>
    )}
  </div>
);
