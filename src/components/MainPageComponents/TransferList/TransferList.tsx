import { FC, ReactElement } from 'react';

import { Accordion } from 'components';
import { transferAccordionContent } from 'constants/transferListContent';
import classes from './TransferList.module.scss';

export const TransferList: FC = (): ReactElement => (
  <div className={classes.transferListWrapper}>
    <h1 className={classes.pageTitle}>Transfers list</h1>
    <Accordion accordionList={transferAccordionContent} />
  </div>
);
