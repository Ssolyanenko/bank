import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import { Field, useField } from 'formik';

import { DropDownWithSearchBranches, FormInputBox } from 'components';
import { DropDown } from 'components/_basic';
import {
  LabelsDeliveryBankBlock,
  InputDeliveryBankBlock,
  PlaceholdersDeliveryBankBlock,
  EnumerationsForm,
  InputCreditBillableField,
} from 'constants/formInputs';
import { BankTypes } from 'constants/branchType';
import { Branch } from 'interfaces/branch';
import { useTypedDispatch } from 'hooks';
import { getBranches } from 'store';
import classes from './DeliveryBankBlock.module.scss';

interface Props {
  setFieldValue(field: string, value: string, shouldValidate?: boolean): void;
  bankBranchIdError: string;
  bankCityError: string;
}

export const DeliveryBankBlock: FC<Props> = ({ setFieldValue, bankBranchIdError, bankCityError }): ReactElement => {
  const dispatch = useTypedDispatch();

  const [branchData, setBranchData] = useState<Branch[]>([]);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [isCityClicked, setIsCityClicked] = useState(false);
  const [bankCityField] = useField(InputDeliveryBankBlock.BANK_CITY);

  const bankCity = bankCityField.value;

  const requestBranches = useCallback((): void => {
    if (bankCity) dispatch(getBranches(bankCity, setBranchData, BankTypes.BANK_BRANCH));
  }, [bankCity, dispatch]);

  useEffect((): void => {
    requestBranches();
  }, [requestBranches]);

  return (
    <div className={classes.componentWrapper}>
      <div className={classes.elementWrapper}>
        <div className={classes.secondColumn}>
          <Field
            as={DropDown}
            label={PlaceholdersDeliveryBankBlock.BANK_CITY}
            enumerations={EnumerationsForm.BANK_CITY}
            name={InputCreditBillableField.BANK_CITY}
            placeholder={PlaceholdersDeliveryBankBlock.BANK_CITY}
            onClick={(): void => setIsCityClicked(true)}
          />
          {isCityClicked && <p className={classes.error}>{bankCityError}</p>}
        </div>
      </div>
      <div className={classes.elementWrapper}>
        <FormInputBox
          name={InputDeliveryBankBlock.BANK_COUNTRY}
          label={LabelsDeliveryBankBlock.BANK_COUNTRY}
          isDisabled
        />
      </div>
      <div className={classes.elementWrapper}>
        <Field
          as={DropDownWithSearchBranches}
          label={LabelsDeliveryBankBlock.BANK_BRANCH}
          name={InputDeliveryBankBlock.BANK_BRANCH}
          placeholder={PlaceholdersDeliveryBankBlock.BANK_BRANCH}
          branches={branchData}
          setFieldValue={setFieldValue}
          errorBankBranchesFound="Sorry, no banks are found, change the city"
          onClick={(): void => setIsDropdownClicked(true)}
        />
        {isDropdownClicked && <p className={classes.error}>{bankBranchIdError}</p>}
      </div>
    </div>
  );
};
