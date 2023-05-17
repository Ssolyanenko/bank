import { FC, ReactElement } from 'react';

import { ModalConfirmation, CloseButton } from 'components/_basic';
import { Size } from 'interfaces/common/componentsSettings';
import { ICON_VALUES } from 'constants/modalWindow';
import { Statuses } from 'interfaces/statuses';
import classes from './ResponseModal.module.scss';

interface Props {
  isOpened: boolean;
  modalCloseHandler(): void;
  content: string | JSX.Element;
  status: Statuses;
}

export const ResponseModal: FC<Props> = ({ isOpened, modalCloseHandler, content, status }): ReactElement => (
  <ModalConfirmation isOpened={isOpened} onClose={modalCloseHandler} maxWidth="600px">
    <div className={classes.modalCloseButton}>
      <CloseButton size={Size.MEDIUM} onClick={modalCloseHandler} />
    </div>
    <div className={classes.modalIcon}>{ICON_VALUES[status]}</div>
    <p className={classes.modalText}>{content}</p>
  </ModalConfirmation>
);
