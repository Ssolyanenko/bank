import React, { FC, ReactElement } from 'react';

import { CloseButton } from 'components/_basic';
import { Size } from 'interfaces/common/componentsSettings';
import { FILTER_TYPE } from 'constants/transactionsHistory';
import classes from './FilterChip.module.scss';

interface Props {
  value: string;
  removeFilter(value: string, resetForm: () => void): void;
  filterType: FILTER_TYPE;
  resetForm(): void;
}

export const FilterChip: FC<Props> = ({ value, removeFilter, filterType, resetForm }): ReactElement => (
  <div className={classes.chip}>
    <span className={classes.chipText}>{value}</span>
    <CloseButton onClick={(): void => removeFilter(filterType, resetForm)} size={Size.MEDIUM} />
  </div>
);
