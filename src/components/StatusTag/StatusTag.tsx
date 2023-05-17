import { FC, ReactElement } from 'react';

import { cardApplicationStatusClasses } from 'helpers/cardApplicationStatusClasses';
import { СardApplicationStatusses } from 'interfaces/cardApplications';
import classes from './StatusTag.module.scss';

interface Props {
  status: СardApplicationStatusses;
}

export const StatusTag: FC<Props> = ({ status }): ReactElement => (
  <span className={`${classes.statusTag} ${classes[cardApplicationStatusClasses(status)]}`}>{status}</span>
);
