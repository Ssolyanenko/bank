import { FC, useEffect, ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import { useField, Field, FormikErrors, FormikTouched } from 'formik';
import { useTranslation } from 'react-i18next';

import { FormInputBox } from 'components';
import { DropDown, FormError } from 'components/_basic';
import { CITIES, DebitCardOrderFieldNames } from 'constants/debitCardsOrderForm';
import { DebitCardOrderInitialValues, FormBlockFormik } from 'interfaces/orderDebitForm';
import classes from './DebitAddressBlock.module.scss';

interface Props extends FormBlockFormik {
  isSendButtonClicked: boolean;
  errors: FormikErrors<DebitCardOrderInitialValues>;
  touched: FormikTouched<DebitCardOrderInitialValues>;
}

export const DebitAddressBlock: FC<Props> = ({
  setFieldValue,
  setFieldTouched,
  isSendButtonClicked,
  errors,
  touched,
}): ReactElement => {
  const { t } = useTranslation();

  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  const { DELIVERY_ADDRESS, DELIVERY_COUNTRY, POST_CODE, CITY, HOUSE, APARTMENT, UNIT, STREET } =
    DebitCardOrderFieldNames;

  const [street] = useField(STREET);
  const [house] = useField(HOUSE);
  const [apartment] = useField(APARTMENT);
  const [unit] = useField(UNIT);
  const [postCode] = useField(POST_CODE);

  useEffect((): void => {
    const deliveryAddress = `${street.value} ${house.value} ${apartment.value} ${
      unit.value
    } ${postCode.value.toUpperCase()}`;

    setFieldValue(DELIVERY_ADDRESS, deliveryAddress);
  }, [setFieldValue, street.value, postCode.value, house.value, apartment.value, unit.value, DELIVERY_ADDRESS]);

  useEffect(
    (): (() => void) => (): void => {
      setFieldValue(STREET, '');
      setFieldValue(CITY, '');
      setFieldValue(HOUSE, '');
      setFieldValue(APARTMENT, '');
      setFieldValue(UNIT, '');
      setFieldValue(POST_CODE, '');
      setFieldTouched(STREET, false);
      setFieldTouched(CITY, false);
      setFieldTouched(HOUSE, false);
      setFieldTouched(APARTMENT, false);
      setFieldTouched(UNIT, false);
      setFieldTouched(POST_CODE, false);
    },
    [setFieldValue, setFieldTouched, STREET, CITY, HOUSE, APARTMENT, UNIT, POST_CODE]
  );

  return (
    <>
      <Box className={classes.row}>
        <Box component="label" className={classes.label}>
          <FormInputBox name={DELIVERY_COUNTRY} label={t('debitAddressBlock.fieldLabels.country')} isDisabled />
        </Box>
      </Box>
      <Box className={classes.row}>
        <Box component="label" className={classes.label}>
          <FormInputBox
            name={POST_CODE}
            label={t('debitAddressBlock.fieldLabels.postCode')}
            placeholder={t('debitAddressBlock.fieldPlaceholders.postCode')}
            isRequired
          />
          <FormError name={POST_CODE} />
          {!touched.postCode && isSendButtonClicked && errors.postCode && (
            <div className={classes.error}>{errors.postCode}</div>
          )}
        </Box>
        <Box component="label" className={classes.label}>
          <Field
            fullWidth
            as={DropDown}
            name={CITY}
            label={t('debitAddressBlock.fieldLabels.postCode')}
            placeholder={t('debitAddressBlock.fieldPlaceholders.city')}
            enumerations={CITIES}
            onClick={(): void => setIsDropdownClicked(true)}
            isRequired
          />
          {touched.city}
          {(isSendButtonClicked || isDropdownClicked) && errors.city && (
            <div className={classes.error}>{errors.city}</div>
          )}
        </Box>
      </Box>
      <Box className={classes.row}>
        <Box component="label" className={classes.label}>
          <FormInputBox
            name={STREET}
            label={t('debitAddressBlock.fieldLabels.street')}
            placeholder={t('debitAddressBlock.fieldPlaceholders.street')}
            isRequired
          />
          <FormError name={STREET} />
          {!touched.street && isSendButtonClicked && errors.street && (
            <div className={classes.error}>{errors.street}</div>
          )}
        </Box>
        <Box component="label" className={classes.label}>
          <FormInputBox
            name={HOUSE}
            label={t('debitAddressBlock.fieldLabels.house')}
            placeholder={t('debitAddressBlock.fieldPlaceholders.house')}
            isRequired
          />
          <FormError name={HOUSE} />
          {!touched.house && isSendButtonClicked && errors.house && <div className={classes.error}>{errors.house}</div>}
        </Box>
      </Box>
      <Box className={classes.row}>
        <Box component="label" className={classes.label}>
          <FormInputBox
            name={UNIT}
            label={t('debitAddressBlock.fieldLabels.unit')}
            placeholder={t('debitAddressBlock.fieldPlaceholders.unit')}
          />
          <FormError name={UNIT} />
        </Box>
        <Box component="label" className={classes.label}>
          <FormInputBox
            name={APARTMENT}
            label={t('debitAddressBlock.fieldLabels.apartment')}
            placeholder={t('debitAddressBlock.fieldPlaceholders.apartment')}
          />
          <FormError name={APARTMENT} />
        </Box>
      </Box>
    </>
  );
};
