import { FC, useState, ReactElement } from 'react';
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
import { DropDown, FormError, PrimaryButton } from 'components/_basic';
import {
  EnumerationsForm,
  INITIAL_VALUES_CREDIT_PREMIUM,
  LabelsCreditPremium,
  InputCreditPremiumField,
  PlaceholdersCreditPremium,
  ValueToBeMarital,
} from 'constants/formInputs';
import { FORM_CREDIT_PREMIUM } from 'constants/titles';
import { ERROR_MESSAGE } from 'constants/errors';
import { DELIVERY_STATUSES } from 'constants/delivery';
import { SUCCESS } from 'constants/text';
import { RoutingPaths } from 'constants/routingPaths';
import { orderCardTemplatePremium, removeSpacesFromString } from 'helpers';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { useTypedSelector, useTypedDispatch } from 'hooks';
import { getCreditPremiumCard, getIsCardOrdered, requestOrderCardTemplate } from 'store';
import classes from './OrderCreditCardPremium.module.scss';

export const OrderCreditCardPremium: FC = (): ReactElement => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isAmountClicked, setIsAmountClicked] = useState(false);
  const [isMaritalClicked, setIsMaritalClicked] = useState(false);
  const [isTermsAgreedClicked, setIsTermsAgreedClicked] = useState(false);
  const [isAccuracyConfirmedClicked, setIsAccuracyConfirmedClicked] = useState(false);

  const isTrueStatus = (currentValue: boolean): boolean => currentValue;

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { text, status } = useTypedSelector(getIsCardOrdered);
  const cardProductId = useTypedSelector(getCreditPremiumCard).id;

  const CHECKBOXES_STATUS = [isTermsAgreedClicked, isAccuracyConfirmedClicked];

  const modalCloseHandler = (): void => {
    status === SUCCESS && navigate(`/${RoutingPaths.MAIN_PAGE_URL}/`);
    setIsModalOpened(false);
  };

  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES_CREDIT_PREMIUM}
        validationSchema={orderCardTemplatePremium}
        onSubmit={({
          bankBranchId,
          amount,
          incomePerMonth,
          marital,
          deliveryType,
          residenceCountry,
          residenceRegion,
          residenceCity,
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
        }): void => {
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
            residenceCity,
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
            isWorkInformally,
            isAccuracyConfirmed,
          };
          dispatch(requestOrderCardTemplate(orderData));
          setIsModalOpened(true);
        }}
      >
        {({ handleSubmit, isValid, setFieldValue, getFieldMeta, touched, errors }): ReactElement => (
          <Form className={classes.form}>
            <h2 className={classes.title}>{FORM_CREDIT_PREMIUM.TITLE_FORM}</h2>
            <div className={classes.elementWrapper}>
              <FormInputBox
                name={InputCreditPremiumField.AMOUNT}
                label={LabelsCreditPremium.AMOUNT}
                placeholder={PlaceholdersCreditPremium.AMOUNT}
                onClick={(): void => setIsAmountClicked(true)}
                setFieldValue={setFieldValue}
                isRequired
                isMoney
              />
              {isAmountClicked &&
                !(getFieldMeta(InputCreditPremiumField.AMOUNT).error === ERROR_MESSAGE.maxAmount(5000)) && (
                  <div className={classes.notification}>{t('errors.maxAmount', { max: 5000 })}</div>
                )}
              <FormError name={InputCreditPremiumField.AMOUNT} />
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
                name={InputCreditPremiumField.INCOME}
                label={LabelsCreditPremium.INCOME}
                placeholder={PlaceholdersCreditPremium.INCOME}
                setFieldValue={setFieldValue}
                isRequired
                isMoney
              />
              <FormError name={InputCreditPremiumField.INCOME} />
            </div>
            <div className={classes.elementWrapper}>
              <Field
                as={DropDown}
                label={LabelsCreditPremium.MARITAL}
                enumerations={EnumerationsForm.MARITAL}
                name={InputCreditPremiumField.MARITAL}
                placeholder={PlaceholdersCreditPremium.MARITAL}
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
              setIsTermsAgreedClicked={setIsTermsAgreedClicked}
              isTermsAgreedClicked={isTermsAgreedClicked}
              setIsAccuracyConfirmedClicked={setIsAccuracyConfirmedClicked}
              isAccuracyConfirmedClicked={isAccuracyConfirmedClicked}
            />
            <div className={classes.wrapperButton}>
              <PrimaryButton
                onClick={handleSubmit}
                className={classes.formButton}
                isDisabled={!isValid || !isAccuracyConfirmedClicked || !isTermsAgreedClicked}
                type={ButtonType.SUBMIT}
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
