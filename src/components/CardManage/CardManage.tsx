import { FC, ReactElement } from 'react';

import { CardManageNames } from 'constants/cardManageText';
import { ActivateBlockCard, ChangeTransactionLimit, ChangePINCode } from 'components';
import classes from './CardManage.module.scss';

interface Props {
  hasCardStatus: boolean;
  cardId: number;
}

export const CardManage: FC<Props> = ({ hasCardStatus, cardId }): ReactElement => {
  const components = [
    { component: <ActivateBlockCard cardId={cardId} hasCardStatus={hasCardStatus } />, id: CardManageNames.ACTIVATE_CARD },
    { component: <ChangePINCode cardId={cardId} />, id: CardManageNames.CHANGE_PIN_CODE },
    { component: <ChangeTransactionLimit />, id: CardManageNames.CHANGE_TRANSACTION_LIMIT },
  ];

  return (
    <ul className={classes.wrapper}>
      {components.map(
        ({ component, id }, index): ReactElement => (
          <li key={id + index} className={classes.elementWrapper}>
            {component}
          </li>
        )
      )}
    </ul>
  );
};
