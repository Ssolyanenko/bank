import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/_basic';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { receipButtonsItems as items } from 'constants/buttonsLists';
import classes from './ReceiptButtons.module.scss';

interface Props {
  handleClickShareModal(): void;
}

export const ReceiptButtons: FC<Props> = ({ handleClickShareModal }): ReactElement => {
  const { t } = useTranslation();

  return (
    <ul className={classes.buttonsList}>
      {items.map(
        ({ icon, name, type }): ReactElement => (
          <li className={classes.buttonItem} key={type}>
            <Button
              className={classes.button}
              type={ButtonType.BUTTON}
              onClick={type === 'share' ? handleClickShareModal : undefined}
            >
              {icon}
              {t(name)}
            </Button>
          </li>
        )
      )}
    </ul>
  );
};
