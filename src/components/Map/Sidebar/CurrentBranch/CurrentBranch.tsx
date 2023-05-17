import React, { FC, ReactElement, useEffect, useState } from 'react';

import { BranchContainer } from 'components';
import { OpenNowIcon } from 'assets';
import { getTimeWork } from 'helpers/getTimeWork';
import { Branch } from 'interfaces/branch';
import { DAYS, WEEK } from 'constants/days';
import { getIcon } from 'helpers/getIcon';
import { changeDay } from 'helpers/changeDay';
import classes from './CurrentBranch.module.scss';

interface Props {
  branch: Branch;
  calculateRoute(): void;
  handleActiveMarker(branch: Branch): void;
  distance: string;
}

export const CurrentBranch: FC<Props> = ({ branch, calculateRoute, handleActiveMarker, distance }): ReactElement => {
  const [day, setDay] = useState('Monday');

  useEffect(() => {
    const date = new Date();
    setDay(() => WEEK[date.getDay()]);
    changeDay(WEEK[date.getDay()], setDay);
  }, []);

  return (
    <div className={classes.branch}>
      <div className={classes.branchInform}>
        <BranchContainer branch={branch} selectBranch={handleActiveMarker} distance={distance} />
        <div className={classes.work}>
          <span className={classes.text}>Working hours</span>
          <div className={classes.weekDay}>
            {Object.entries(DAYS).map(([key, value]) => (
              <button id={value} className={classes.buttonDay} onClick={(): void => changeDay(value, setDay)} key={key}>
                {key}
              </button>
            ))}
          </div>
          <div className={classes.workingHour}>
            <OpenNowIcon className={classes.icon} />
            {getTimeWork(branch, day) || 'Closed'}
          </div>
        </div>
        <div className={classes.services}>
          <span className={classes.text}>Main services</span>
          {Object.entries(branch).map(
            ([key, value]) =>
              value === true && (
                <div key={key} className={classes.service}>
                  <span className={classes.operation}>{getIcon(key)}</span>
                  <span>{key.slice(0, 1).toUpperCase() + key.slice(1)}</span>
                </div>
              )
          )}
        </div>
      </div>
      <div className={classes.makeRoute}>
        <button className={classes.build} onClick={calculateRoute}>
          Build a route
        </button>
      </div>
    </div>
  );
};
