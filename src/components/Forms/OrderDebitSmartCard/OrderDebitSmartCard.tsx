import { FC, ReactElement, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { DebitAddressBlock, DebitBankBlock, DebitUserBlock, ResponseModal, AcceptTerms } from 'components';
import { DropDown, PrimaryButton } from 'components/_basic';
import {
  DEBIT_CARD_ORDER_FORM_INITIAL_VALUES,
  DELIVERY_METHODS,
  DebitCardOrderFieldNames,
  DeliveryMethodNames,
  DeliveryTypes,
} from 'constants/debitCardsOrderForm';
import { SUCCESS } from 'constants/text';
import { DELIVERY_STATUSES } from 'constants/delivery';
import { orderDebitCardValidation } from 'helpers';
import { useTypedDispatch, useTypedSelector } from 'hooks';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { getDebitSmartCard, getIsDebitCardOrdered, requestOrderDebitCardTemplate } from 'store';
import { RoutingPaths } from 'constants/routingPaths';
import classes from './OrderDebitSmartCard.module.scss';

const { BY_MAIL, BY_COURIER, AT_THE_BANK } = DeliveryMethodNames;
const { DELIVERY_TYPE } = DebitCardOrderFieldNames;

export const OrderDebitSmartCard: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { text, status } = useTypedSelector(getIsDebitCardOrdered);
  const cardProductId = useTypedSelector(getDebitSmartCard).id;

  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [isTermsAgreedClicked, setIsTermsAgreedClicked] = useState(false);
  const [isAccuracyConfirmedClicked, setIsAccuracyConfirmedClicked] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isSendButtonClicked, setIsSendButtonClicked] = useState(false);

  const CHECKBOXES_STATUS = [isTermsAgreedClicked, isAccuracyConfirmedClicked];

  const isTrueStatus = (currentValue: boolean): boolean => currentValue;

  const modalCloseHandler = (): void => {
    status === SUCCESS && navigate(`/${RoutingPaths.MAIN_PAGE_URL}/`);
    setIsModalOpened(false);
  };

  const handleChangeOfDeliveryType = (): void => {
    setIsDropdownClicked(true);
    setIsSendButtonClicked(false);
  };

  return (
    <>
      <Formik
        initialValues={DEBIT_CARD_ORDER_FORM_INITIAL_VALUES}
        validationSchema={orderDebitCardValidation}
        onSubmit={({
          bankBranchId,
          deliveryType,
          deliveryCountry,
          deliveryAddress,
          city,
          isTermsAgreed,
          isAccuracyConfirmed,
        }): void => {
          const orderData = {
            cardProductId,
            deliveryType: DeliveryTypes[deliveryType],
            deliveryCountry,
            deliveryCity: city,
            deliveryAddress,
            bankBranchId,
            deliveryStatus: DELIVERY_STATUSES.underConsideration,
            isTermsAgreed,
            isAccuracyConfirmed,
          };
          dispatch(requestOrderDebitCardTemplate(orderData));
          setIsModalOpened(true);
        }}
      >
        {({ setFieldValue, setFieldTouched, errors, values, isValid, touched }): ReactElement => (
          <Form className={classes.cardOrderForm}>
            <h2 className={classes.title}>{t('orderDebitSmartCard.title')}</h2>
            <DebitUserBlock setFieldValue={setFieldValue} />
            <Box className={classes.row}>
              <Box component="label" className={classes.label}>
                <Field
                  fullWidth
                  as={DropDown}
                  name={DELIVERY_TYPE}
                  label={t('orderDebitSmartCard.fieldLabels.deliveryType')}
                  enumerations={DELIVERY_METHODS}
                  placeholder={t('orderDebitSmartCard.fieldPlaceholders.deliveryType')}
                  onClick={(): void => handleChangeOfDeliveryType()}
                  isRequired
                />
                {(isSendButtonClicked || isDropdownClicked) && errors.deliveryType && (
                  <div className={classes.error}>{errors.deliveryType}</div>
                )}
              </Box>
            </Box>
            {values.deliveryType === BY_MAIL && (
              <DebitAddressBlock
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                isSendButtonClicked={isSendButtonClicked}
                errors={errors}
                touched={touched}
              />
            )}
            {values.deliveryType === BY_COURIER && (
              <DebitAddressBlock
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                isSendButtonClicked={isSendButtonClicked}
                errors={errors}
                touched={touched}
              />
            )}
            {values.deliveryType === AT_THE_BANK && (
              <DebitBankBlock
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                branchError={errors.bankBranchId}
                cityError={errors.city}
              />
            )}
            <AcceptTerms
              isSendButtonClicked={isSendButtonClicked}
              isTermsAgreedClicked={isTermsAgreedClicked}
              isAccuracyConfirmedClicked={isAccuracyConfirmedClicked}
              setIsTermsAgreedClicked={setIsTermsAgreedClicked}
              setIsAccuracyConfirmedClicked={setIsAccuracyConfirmedClicked}
            />
            <Box className={classes.submitButtonContainer}>
              <PrimaryButton
                className={classes.submitButton}
                type={ButtonType.SUBMIT}
                name={ButtonType.SUBMIT}
                isDisabled={!isValid || !isAccuracyConfirmedClicked || !isTermsAgreedClicked}
              >
                {t('buttonNames.send')}
              </PrimaryButton>
              {(!isValid || !isAccuracyConfirmedClicked || !isTermsAgreedClicked) && (
                <Box className={classes.submitButtonCover} onClick={(): void => setIsSendButtonClicked(true)} />
              )}
            </Box>
            {!isValid && isSendButtonClicked ? (
              <div className={`${classes.error} ${classes.allFieldsError}`}>{t('errors.allFields')}</div>
            ) : (
              Object.keys(touched).length !== 0 &&
              isSendButtonClicked &&
              (CHECKBOXES_STATUS.every(isTrueStatus) || (
                <div className={`${classes.error} ${classes.allFieldsError}`}>{t('errors.terms')}</div>
              ))
            )}
          </Form>
        )}
      </Formik>
      <ResponseModal isOpened={isModalOpened} modalCloseHandler={modalCloseHandler} content={text} status={status} />
    </>
  );
};
