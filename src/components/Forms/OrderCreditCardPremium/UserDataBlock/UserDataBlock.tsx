import { FC, ReactElement, useEffect } from 'react';

import { FormInputBox } from 'components';
import { InputUserDataBlock, LabelsUserDataBlock } from 'constants/formInputs';
import { getUserAccount } from 'store';
import { useTypedSelector } from 'hooks/useTypedSelector';
import classes from './UserDataBlock.module.scss';

interface Props {
  setFieldValue(field: string, value?: string, shouldValidate?: boolean): void;
}

export const UserDataBlock: FC<Props> = ({ setFieldValue }): ReactElement => {
  const { lastName, firstName, phone, email, passport } = useTypedSelector(getUserAccount);

  useEffect(() => {
    setFieldValue(InputUserDataBlock.LAST_NAME, lastName ?? '');
    setFieldValue(InputUserDataBlock.FIRST_NAME, firstName ?? '');
    setFieldValue(InputUserDataBlock.PHONE, phone ?? '');
    setFieldValue(InputUserDataBlock.EMAIL, email ?? '');
    setFieldValue(InputUserDataBlock.PASSPORT, passport ?? '');
  }, [setFieldValue, lastName, firstName, phone, email, passport]);

  return (
    <>
      <div className={classes.elementWrapper}>
        <div className={classes.secondColumn}>
          <FormInputBox name={InputUserDataBlock.LAST_NAME} label={LabelsUserDataBlock.LAST_NAME} isDisabled />
        </div>
      </div>
      <div className={classes.elementWrapper}>
        <FormInputBox name={InputUserDataBlock.FIRST_NAME} label={LabelsUserDataBlock.FIRST_NAME} isDisabled />
      </div>
      <div className={classes.elementWrapper}>
        <div className={classes.secondColumn}>
          <FormInputBox name={InputUserDataBlock.PHONE} label={LabelsUserDataBlock.PHONE} isDisabled type="tel" />
        </div>
      </div>
      <div className={classes.elementWrapper}>
        <FormInputBox name={InputUserDataBlock.EMAIL} label={LabelsUserDataBlock.EMAIL} isDisabled type="email" />
      </div>
      <div className={classes.elementWrapper}>
        <FormInputBox name={InputUserDataBlock.PASSPORT} label={LabelsUserDataBlock.PASSPORT} isDisabled />
      </div>
    </>
  );
};
