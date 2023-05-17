import { FC, ReactElement } from 'react';

import classes from './StepperLabel.module.scss';

interface Props {
  isCompleted: boolean;
}

export const StepperLabel: FC<Props> = ({ isCompleted }): ReactElement => {
  const active: string = isCompleted ? classes.active : '';

  return (
    <div className={classes.step}>
      <div className={`${classes.circle} ${active}`} />
      <div className={`${classes.connector} ${active}`} />
    </div>
  );
};
