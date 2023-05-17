import { FC, ReactElement } from 'react';

import { TransferAccordionSummary as Props } from 'interfaces/transferPage';
import classes from './TransferAccordionSummary.module.scss';

export const TransferAccordionSummary: FC<Props> = ({ icon, title, details = '' }): ReactElement => (
  <div className={classes.summaryWrapper}>
    <div className={classes.icon}>{icon}</div>
    <div className={classes.contentWrapper}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.descriptionText}>{details}</p>
    </div>
  </div>
);
