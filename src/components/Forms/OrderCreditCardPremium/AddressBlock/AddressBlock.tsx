import { FC, useEffect, useState, ReactElement } from 'react';
import { Field, useField } from 'formik';

import { FormInputBox } from 'components';
import { DropDown, FormError } from 'components/_basic';
import {
  EnumerationsForm,
  LabelsAddressBlock,
  InputAddressBlock,
  PlaceholdersAddressBlock,
  ValueToBEAddress,
  NamesToBEAddress,
} from 'constants/formInputs';
import { DELIVERY_TYPES } from 'constants/delivery';
import classes from './AddressBlock.module.scss';

interface Props {
  setFieldValue(field: string, value: string, shouldValidate?: boolean): void;
  dropdownError: string;
}

export const AddressBlock: FC<Props> = ({ setFieldValue, dropdownError }): ReactElement => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [address] = useField(InputAddressBlock.ADDRESS);
  const [city] = useField(InputAddressBlock.CITY);
  const [street] = useField(InputAddressBlock.STREET);
  const [house] = useField(InputAddressBlock.HOUSE);
  const [apartment] = useField(InputAddressBlock.APARTMENT);
  const [unit] = useField(InputAddressBlock.UNIT);
  const [postCode] = useField(InputAddressBlock.POST_CODE);

  useEffect((): void => {
    const residenceAddress = `${street.value} ${house.value} ${apartment.value} ${unit.value} ${postCode.value}`;
    const residenceRegion = ValueToBEAddress[address.value];

    setFieldValue(NamesToBEAddress.TYPE, DELIVERY_TYPES.bank);
    setFieldValue(NamesToBEAddress.ADDRESS, residenceAddress);
    setFieldValue(NamesToBEAddress.REGION, residenceRegion);
    setFieldValue(NamesToBEAddress.CITY, city.value);
  }, [
    setFieldValue,
    street.value,
    house.value,
    apartment.value,
    unit.value,
    postCode.value,
    address.value,
    city.value,
  ]);

  return (
    <div className={classes.componentWrapper}>
      <div className={classes.elementWrapper}>
        <Field
          as={DropDown}
          label={LabelsAddressBlock.ADDRESS}
          enumerations={EnumerationsForm.ADDRESS}
          name={InputAddressBlock.ADDRESS}
          placeholder={PlaceholdersAddressBlock.ADDRESS}
          onClick={(): void => setIsDropdownClicked(true)}
        />
        {isDropdownClicked && <div className={classes.error}>{dropdownError}</div>}
      </div>
      {address.value && (
        <>
          <div className={classes.elementWrapper}>
            <div className={classes.secondColumn}>
              <FormInputBox
                name={InputAddressBlock.CITY}
                label={LabelsAddressBlock.CITY}
                placeholder={PlaceholdersAddressBlock.CITY}
                isRequired
              />
              <FormError name={InputAddressBlock.CITY} />
            </div>
          </div>
          <div className={classes.elementWrapper}>
            <FormInputBox
              name={InputAddressBlock.POST_CODE}
              label={LabelsAddressBlock.POST_CODE}
              placeholder={PlaceholdersAddressBlock.POST_CODE}
            />
            <FormError name={InputAddressBlock.POST_CODE} />
          </div>
          <div className={classes.elementWrapper}>
            <div className={classes.secondColumn}>
              <FormInputBox
                name={InputAddressBlock.HOUSE}
                label={LabelsAddressBlock.HOUSE}
                placeholder={PlaceholdersAddressBlock.HOUSE}
                isRequired
              />
              <FormError name={InputAddressBlock.HOUSE} />
            </div>
          </div>
          <div className={classes.elementWrapper}>
            <FormInputBox
              name={InputAddressBlock.STREET}
              label={LabelsAddressBlock.STREAT}
              placeholder={PlaceholdersAddressBlock.STREAT}
              isRequired
            />
            <FormError name={InputAddressBlock.STREET} />
          </div>
          <div className={classes.elementWrapper}>
            <div className={classes.secondColumn}>
              <FormInputBox
                name={InputAddressBlock.APARTMENT}
                label={LabelsAddressBlock.APARTMENT}
                placeholder={PlaceholdersAddressBlock.APARTMENT}
                setFieldValue={setFieldValue}
              />
              <FormError name={InputAddressBlock.APARTMENT} />
            </div>
          </div>
          <div className={classes.elementWrapper}>
            <FormInputBox
              name={InputAddressBlock.UNIT}
              label={LabelsAddressBlock.UNIT}
              placeholder={PlaceholdersAddressBlock.UNIT}
            />
            <FormError name={InputAddressBlock.UNIT} />
          </div>
        </>
      )}
    </div>
  );
};
