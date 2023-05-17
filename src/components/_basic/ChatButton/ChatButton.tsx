import { FC, ReactElement } from 'react';

import { ChatIcon } from 'assets';
import { toDo } from 'helpers';
import { ButtonType } from 'interfaces/common/componentsSettings';
import classes from './ChatButton.module.scss';

interface Props {
  name?: string;
  type?: ButtonType;
  onClick?(): void;
}

export const ChatButton: FC<Props> = ({ type = ButtonType.BUTTON, name = '', onClick = toDo }): ReactElement => (
  <button type={type} name={name} onClick={onClick}>
    <ChatIcon className={classes.chatButton} />
  </button>
);
