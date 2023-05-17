import { FC, useCallback, useState, useEffect, ReactElement } from 'react';
import { Box } from '@mui/material';
import { useField, Field } from 'formik';

import { DropDownWithSearchBranches, FormInputBox } from 'components';
import { DropDown } from 'components/_basic';
import { BankTypes } from 'constants/branchType';
import { ERROR_MESSAGE } from 'constants/errors';
import {
  DebitCardOrderFieldNames,
  DebitCardOrderFieldLabels,
  DebitCardOrderFieldPlaceholders,
  CITIES,
} from 'constants/debitCardsOrderForm';
import { Branch } from 'interfaces/branch';
import { FormBlockFormik } from 'interfaces/orderDebitForm';
import { useTypedDispatch } from 'hooks';
import { getBranches } from 'store';
import classes from './DebitBankBlock.module.scss';

interface Props extends FormBlockFormik {
  branchError?: string;
  cityError?: string;
}

const { BANK_BRANCH_ID_LABEL, CITY_LABEL, DELIVERY_COUNTRY_LABEL } = DebitCardOrderFieldLabels;
const { BANK_BRANCH_ID_PLACEHOLDER, CITY_PLACEHOLDER } = DebitCardOrderFieldPlaceholders;

export const DebitBankBlock: FC<Props> = ({ setFieldValue, setFieldTouched, branchError, cityError }): ReactElement => {
  const dispatch = useTypedDispatch();

  const [isBankBranchClicked, setIsBankBranchClicked] = useState(false);
  const [isCityClicked, setIsCityClicked] = useState(false);
  const [branchData, setBranchData] = useState<Branch[]>([]);

  const { BANK_BRANCH_ID, DELIVERY_COUNTRY, CITY } = DebitCardOrderFieldNames;
  const [bankCityField] = useField(CITY);
  const bankCity = bankCityField.value;

  const requestBranches = useCallback((): void => {
    if (bankCity) dispatch(getBranches(bankCity, setBranchData, BankTypes.BANK_BRANCH));
  }, [bankCity, dispatch]);

  useEffect((): void => {
    requestBranches();
  }, [requestBranches]);

  useEffect(
    (): (() => void) => (): void => {
      setFieldValue(CITY, '');
      setFieldTouched(CITY, false);
      setFieldTouched(BANK_BRANCH_ID, false);
    },
    [setFieldValue, setFieldTouched, CITY, BANK_BRANCH_ID]
  );

  return (
    <>
      <Box className={classes.row}>
        <Box component="label" className={classes.label}>
          <FormInputBox name={DELIVERY_COUNTRY} label={DELIVERY_COUNTRY_LABEL} isDisabled />
        </Box>
        <Box component="label" className={classes.label}>
          <Field
            as={DropDown}
            name={CITY}
            placeholder={CITY_PLACEHOLDER}
            label={CITY_LABEL}
            enumerations={CITIES}
            onClick={(): void => setIsCityClicked(true)}
            isRequired
          />
          {isCityClicked && <p className={classes.error}>{cityError}</p>}
        </Box>
      </Box>
      <Box className={classes.row}>
        <Box component="label" className={classes.label}>
          <Field
            as={DropDownWithSearchBranches}
            name={BANK_BRANCH_ID}
            label={BANK_BRANCH_ID_LABEL}
            placeholder={BANK_BRANCH_ID_PLACEHOLDER}
            branches={branchData}
            setFieldValue={setFieldValue}
            errorBankBranchesFound={ERROR_MESSAGE.noBanksFound}
            onClick={(): void => setIsBankBranchClicked(true)}
            isRequired
          />
          {isBankBranchClicked && <p className={classes.error}>{branchError ?? ''}</p>}
        </Box>
      </Box>
    </>
  );
};
