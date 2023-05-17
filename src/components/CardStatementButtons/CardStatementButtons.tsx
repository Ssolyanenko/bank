import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/_basic';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { cardStatementButtonsItems as items } from 'constants/buttonsLists';
import classes from './CardStatementButtons.module.scss';

interface Props {
  valueTo: Date | null;
  valueFrom: Date | null;
}

export const CardStatementButtons: FC<Props> = ({ valueFrom, valueTo }): ReactElement => {
  const { t } = useTranslation();

  return (
    <ul className={classes.buttonsList}>
      {items.map(
        ({ icon, name, type }): ReactElement => (
          <li className={classes.dateInputs} key={type}>
            <Button className={classes.button} isDisabled={!(valueFrom && valueTo)} type={ButtonType.SUBMIT}>
              {icon}
              {t(name)}
            </Button>
          </li>
        )
      )}
    </ul>
  );
};
