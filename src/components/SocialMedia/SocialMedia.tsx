import { FC, ReactElement } from 'react';

import { Button } from 'components/_basic';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { socialMediaItems as items } from 'constants/buttonsLists';
import classes from './SocialMedia.module.scss';

export const SocialMedia: FC = (): ReactElement => (
  <ul className={classes.buttonsList}>
    {items.map(
      ({ icon, name, type }): ReactElement => (
        <li className={classes.buttonItem} key={type}>
          <Button className={classes.button} type={ButtonType.SUBMIT}>
            {icon}
            {name}
          </Button>
        </li>
      )
    )}
  </ul>
);
