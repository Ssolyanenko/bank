import React, { FC, ReactElement } from 'react';

import { OPERATION_INITIAL } from 'constants/operations';
import { getIconForOperations } from 'helpers/getIconForOperations';
import classes from './OperationHistory.module.scss';

export const OperationHistory: FC = (): ReactElement => (
  <div className={classes.operationHistory}>
    <div className={classes.operationContainer}>
      {OPERATION_INITIAL.map(({ id, date, time, description, subDescrition, amount, type }) => (
        <div className={classes.operations} key={id}>
          <div className={classes.operation}>
            <div className={classes.dateContainer}>
              <span className={classes.date}>{date}</span>
              <span className={classes.time}>{time}</span>
            </div>
            <div className={classes.iconContainer}>
              <div>{getIconForOperations(type, classes.icon)}</div>
            </div>
            <div className={classes.descriptionContainer}>
              <span className={classes.description}>{description}</span>
              <span className={classes.descriptionText}>{subDescrition}</span>
            </div>
            <div className={classes.amount}>
              {amount}
              <span className={classes.rate}>GBP</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
