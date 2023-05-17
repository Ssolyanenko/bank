import React, { FC, ReactElement, useEffect, useState } from 'react';

import { BankIcon, BranchIcon, TerminalIcon } from 'assets';
import { getInfom, getTimeWork } from 'helpers/getTimeWork';
import { Branch } from 'interfaces/branch';
import { BranchType } from 'constants/branchType';
import { WEEK } from 'constants/days';
import { CLOSE_NOW, OPEN_NOW } from 'constants/text';
import classes from './BranchContainer.module.scss';

interface Props {
  branch: Branch;
  selectBranch(branch: Branch): void;
  distance: string;
}

export const BranchContainer: FC<Props> = ({ branch, selectBranch, distance }): ReactElement => {
  const [day, setDay] = useState('Monday');

  useEffect(() => {
    const date = new Date();
    setDay(WEEK[date.getDay()]);
  }, []);

  return (
    <div className={classes.container}>
      <div role="presentation" className={classes.branchContainer} onClick={(): void => selectBranch(branch)}>
        <div className={classes.content}>
          <div className={classes.icon}>
            {branch.type === BranchType.ATM && <BankIcon className={classes.icon} />}
            {branch.type === BranchType.BANK_BRANCH && <BranchIcon className={classes.icon} />}
            {branch.type === BranchType.TERMINAL && <TerminalIcon className={classes.icon} />}
          </div>
          <div className={classes.address}>
            <span className={classes.branchType}>
              {branch.type[0].toUpperCase() + branch.type.slice(1)}#{branch.number}
            </span>
            <span className={classes.branchAddres}>{branch.address}</span>
          </div>
        </div>
        <div className={classes.workHour}>
          <span className={classes.location}>{distance}</span>
          {getInfom(branch, day) ? (
            <span className={classes.open}>{OPEN_NOW}</span>
          ) : (
            <span className={classes.close}>{CLOSE_NOW}</span>
          )}
          <span className={classes.time}>{getTimeWork(branch, day)}</span>
        </div>
      </div>
    </div>
  );
};
