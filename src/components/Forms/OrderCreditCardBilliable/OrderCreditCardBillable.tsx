import { FC, ReactElement, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import {
  AddressBlock,
  AdditionalPhoneBlock,
  WorkBlock,
  FormInputBox,
  DeliveryBankBlock,
  UserDataBlock,
  ResponseModal,
  AcceptTerms,
} from 'components';
import { DropDown, FormError, PrimaryButton, DropDownWithCheckbox } from 'components/_basic';
import { SUCCESS } from 'constants/text';
import {
  EnumerationsForm,
  INITIAL_VALUES_CREDIT_BILLABLE,
  LabelsCreditBillable,
  InputCreditBillableField,
  ValueToBeMarital,
  ValueToBECity,
  PlaceholdersCreditBillable,
  ENUMERATION_CATEGORIES,
} from 'constants/formInputs';
import { FORM_CREDIT_PREMIUM } from 'constants/titles';
import { DELIVERY_STATUSES } from 'constants/delivery';
import { RoutingPaths } from 'constants/routingPaths';
import { getCategoryIdsFromNames, orderCreditCardBillable, removeSpacesFromString } from 'helpers';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { useTypedSelector, useTypedDispatch } from 'hooks';
import { getCreditBillableCard, getIsCardOrdered, requestOrderCardTemplate } from 'store';
import { ERROR_MESSAGE } from 'constants/errors';
import classes from './OrderCreditCardBillable.module.scss';

export const OrderCreditCardBillable: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const cardProductId = useTypedSelector(getCreditBillableCard).id;
  const { text, status } = useTypedSelector(getIsCardOrdered);

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isMaritalClicked, setIsMaritalClicked] = useState(false);
  const [isAmountClicked, setIsAmountClicked] = useState(false);
  const [isCategoriesClicked, setIsCategoriesClicked] = useState(false);
  const [isTermsAgreedClicked, setIsTermsAgreedClicked] = useState(false);
  const [isAccuracyConfirmedClicked, setIsAccuracyConfirmedClicked] = useState(false);

  const CHECKBOXES_STATUS = [isTermsAgreedClicked, isAccuracyConfirmedClicked];

  const isTrueStatus = (currentValue: boolean): boolean => currentValue;

  const modalCloseHandler = (): void => {
    status === SUCCESS && navigate(`/${RoutingPaths.MAIN_PAGE_URL}`);
    setIsModalOpened(false);
  };

  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES_CREDIT_BILLABLE}
        validationSchema={orderCreditCardBillable}
        onSubmit={(values): void => {
          const {
            bankBranchId,
            amount,
            incomePerMonth,
            marital,
            deliveryType,
            bankCity,
            residenceCountry,
            residenceRegion,
            residenceAddress,
            additionalPhoneOwner,
            additionalPhoneNumber,
            additionalPhoneOwnerName,
            placeOfWorkType,
            placeOfWorkName,
            placeOfWorkOccupation,
            unemployedType,
            causeOfUnemployment,
            isWorkInformally,
            isTermsAgreed,
            isAccuracyConfirmed,
            categories,
          } = values;
          const orderData = {
            deliveryType,
            deliveryStatus: DELIVERY_STATUSES.underConsideration,
            cardProductId,
            bankBranchId,
            amount,
            incomePerMonth,
            maritalStatus: ValueToBeMarital[marital],
            residenceCountry,
            residenceRegion,
            residenceCity: ValueToBECity[bankCity],
            residenceAddress,
            additionalPhoneOwner,
            additionalPhoneNumber: removeSpacesFromString(additionalPhoneNumber),
            additionalPhoneOwnerName,
            placeOfWorkType,
            placeOfWorkName,
            placeOfWorkOccupation,
            unemployedType,
            causeOfUnemployment,
            isTermsAgreed,
            isAccuracyConfirmed,
            isWorkInformally,
            categories: getCategoryIdsFromNames(categories),
          };
          dispatch(requestOrderCardTemplate(orderData));
          setIsModalOpened(true);
        }}
      >
        {({ isValid, setFieldValue, getFieldMeta, errors, touched }): ReactElement => (
          <Form className={classes.form}>
            <h2 className={classes.title}>{FORM_CREDIT_PREMIUM.TITLE_FORM}</h2>
            <div className={classes.elementWrapper}>
              <FormInputBox
                name={InputCreditBillableField.AMOUNT}
                label={LabelsCreditBillable.AMOUNT}
                placeholder={PlaceholdersCreditBillable.AMOUNT}
                onClick={(): void => setIsAmountClicked(true)}
                setFieldValue={setFieldValue}
                isRequired
                isMoney
              />
              {isAmountClicked &&
                !(getFieldMeta(InputCreditBillableField.AMOUNT).error === ERROR_MESSAGE.maxAmount(5000)) && (
                  <div className={classes.notification}>{t('errors.maxAmount', { max: 5000 })}</div>
                )}
              <FormError name={InputCreditBillableField.AMOUNT} />
            </div>
            <div className={classes.elementWrapper}>
              <Field
                as={DropDownWithCheckbox}
                label={LabelsCreditBillable.CATEGORIES}
                enumerations={ENUMERATION_CATEGORIES}
                name={InputCreditBillableField.CATEGORIES}
                placeholder={PlaceholdersCreditBillable.CATEGORIES}
                setFieldValue={setFieldValue}
                onClick={(): void => setIsCategoriesClicked(true)}
                isRequired
              />
              {isCategoriesClicked && <p className={classes.error}>{errors.categories}</p>}
            </div>
            <UserDataBlock setFieldValue={setFieldValue} />
            <AddressBlock setFieldValue={setFieldValue} dropdownError={errors.address ?? ''} />
            <AdditionalPhoneBlock
              setFieldValue={setFieldValue}
              additionalPhoneOwnerError={errors.additionalPhoneOwner ?? ''}
            />
            <WorkBlock setFieldValue={setFieldValue} dropdownError={errors.work ?? ''} />
            <div className={classes.elementWrapper}>
              <FormInputBox
                name={InputCreditBillableField.INCOME}
                label={LabelsCreditBillable.INCOME}
                placeholder={PlaceholdersCreditBillable.INCOME}
                setFieldValue={setFieldValue}
                isRequired
                isMoney
              />
              <FormError name={InputCreditBillableField.INCOME} />
            </div>
            <div className={classes.elementWrapper}>
              <Field
                as={DropDown}
                label={LabelsCreditBillable.MARITAL}
                enumerations={EnumerationsForm.MARITAL}
                name={InputCreditBillableField.MARITAL}
                placeholder={PlaceholdersCreditBillable.MARITAL}
                onClick={(): void => setIsMaritalClicked(true)}
              />
              {isMaritalClicked && <div className={classes.error}>{errors.marital}</div>}
            </div>
            <h2 className={classes.titleBankBlock}>{FORM_CREDIT_PREMIUM.TITLE_BANK_BLOCK}</h2>
            <DeliveryBankBlock
              setFieldValue={setFieldValue}
              bankBranchIdError={errors.bankBranchId ?? ''}
              bankCityError={errors.bankCity ?? ''}
            />
            <AcceptTerms
              isAccuracyConfirmedClicked={isAccuracyConfirmedClicked}
              isTermsAgreedClicked={isTermsAgreedClicked}
              setIsAccuracyConfirmedClicked={setIsAccuracyConfirmedClicked}
              setIsTermsAgreedClicked={setIsTermsAgreedClicked}
            />
            <div className={classes.wrapperButton}>
              <PrimaryButton
                className={classes.formButton}
                type={ButtonType.SUBMIT}
                isDisabled={!isValid || !isAccuracyConfirmedClicked || !isTermsAgreedClicked}
              >
                {t('buttonNames.send')}
              </PrimaryButton>
              {Object.keys(touched).length !== 0 && !isValid ? (
                <div className={`${classes.error} ${classes.allFieldsError}`}>{t('errors.allFields')}</div>
              ) : (
                Object.keys(touched).length !== 0 &&
                (CHECKBOXES_STATUS.every(isTrueStatus) || (
                  <div className={`${classes.error} ${classes.allFieldsError}`}>{t('errors.terms')}</div>
                ))
              )}
            </div>
          </Form>
        )}
      </Formik>
      <ResponseModal isOpened={isModalOpened} modalCloseHandler={modalCloseHandler} content={text} status={status} />
    </>
  );
};
