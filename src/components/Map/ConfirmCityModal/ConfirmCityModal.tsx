import React, { FC, ReactElement } from 'react';

import { MyLocationIcon } from 'assets';
import { useTypedDispatch } from 'hooks';
import { changeCity } from 'store/city';
import classes from './ConfirmCityModal.module.scss';

interface Props {
  city: string;
  closeModal(): void;
  notConfirmCity(): void;
}

export const ConfirmCityModal: FC<Props> = ({ city, closeModal, notConfirmCity }): ReactElement => {
  const dispatch = useTypedDispatch();

  const confirmCity = (): void => {
    dispatch(changeCity(city));
    closeModal();
  };

  return (
    <div className={classes.confirmCity}>
      <span>Your region</span>
      <div className={classes.location}>
        <MyLocationIcon className={classes.locIcon} />
        <span className={classes.currentCity}>{city}</span>
      </div>
      <div className={classes.buttonConfirm}>
        <button className={classes.yes} onClick={confirmCity}>
          Yes, correct
        </button>
        <button className={classes.no} onClick={notConfirmCity}>
          No, change
        </button>
      </div>
    </div>
  );
};
