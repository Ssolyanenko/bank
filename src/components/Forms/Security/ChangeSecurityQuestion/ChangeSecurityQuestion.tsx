import { FC, ReactElement, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { changeSecurityQuestionValidation } from 'helpers';
import {
  PrimaryButton,
  SecondaryButton,
  DropDown,
  Input,
  FormError,
  ModalConfirmation,
  CloseButton,
} from 'components/_basic';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { ERROR_COLOR } from 'constants/text';
import { CheckmarkIcon } from 'assets';
import {
  ENUMERATIONS_SECURITY_FORM,
  LabelSecurityForm,
  PlaceholderSecurityForm,
  SecurityQuestion,
} from 'constants/formInputs';
import { SecurityQuestionValues } from 'interfaces/securityTabs';
import { CHARACTER_LIMIT } from 'constants/securityCategories';
import { INITIAL_VALUE_ANSWER, MIN_LENGTH_SECURITY_QUESTION } from 'constants/numbers';
import { InputNames } from 'constants/input';
import { requestPostSecurityQuestion } from 'store';
import { RoutingPaths } from 'constants/routingPaths';
import { useTypedDispatch } from 'hooks';
import classes from './ChangeSecurityQuestion.module.scss';

export const ChangeSecurityQuestion: FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const closeModalHandler = (): void => {
    window.location.reload();
    navigate(`/${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.USER_ACCOUNT}`);
    setIsModalOpened(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          securityQuestion: '',
          yourSecurityQuestion: '',
          answer: '',
        }}
        validationSchema={changeSecurityQuestionValidation}
        onSubmit={(values: SecurityQuestionValues, { resetForm }): void => {
          const securityQuestion =
            values.yourSecurityQuestion.length > 0 ? values.yourSecurityQuestion : values.securityQuestion;
          dispatch(
            requestPostSecurityQuestion({
              question: securityQuestion,
              answer: values.answer,
            })
          );
          resetForm();
          setIsModalOpened(true);
        }}
      >
        {({ values, dirty, isValid, errors, touched }): ReactElement => (
          <Form>
            <Box className={classes.header}>
              <Box component="span" className={classes.headerText}>
                Select a security question from the suggested ones or enter your own, then enter the answer to the
                security question.
              </Box>
            </Box>
            <Box className={classes.ChangeSecurityInput}>
              <Field
                as={DropDown}
                enumerations={ENUMERATIONS_SECURITY_FORM}
                name={InputNames.SECURITY_QUESTION}
                placeholder={PlaceholderSecurityForm.SECURITY_QUESTION}
                hasLastChild
              />
              <Box className={classes.error}>{errors.securityQuestion}</Box>
            </Box>
            <Box className={classes.inputContainer}>
              {values.securityQuestion === SecurityQuestion.YOUR_QUESTION && (
                <Box component="label" className={`${classes.ChangeSecurityInput} ${classes.ownQuestionInput}`}>
                  <Field
                    as={Input}
                    labelText={LabelSecurityForm.YOUR_SECURITY_QUESTION}
                    name={InputNames.YOUR_SECURITY_QUESTION}
                    type="text"
                    hasError={!!(touched.yourSecurityQuestion && errors.yourSecurityQuestion)}
                  />
                  <Box className={classes.helperText}>
                    <Box>
                      <FormError additionalClass={classes.text} name={InputNames.YOUR_SECURITY_QUESTION} />
                    </Box>
                    <Box
                      className={`${classes.counterText} ${
                        classes[
                          (values.yourSecurityQuestion.length < MIN_LENGTH_SECURITY_QUESTION &&
                            values.yourSecurityQuestion.length > INITIAL_VALUE_ANSWER) ||
                          values.yourSecurityQuestion.length > CHARACTER_LIMIT
                            ? ERROR_COLOR
                            : ''
                        ]
                      }`}
                    >
                      {values.yourSecurityQuestion.length}/{CHARACTER_LIMIT}
                    </Box>
                  </Box>
                </Box>
              )}
              <Box className={`${classes.ChangeSecurityInput} ${classes.inputNewQuestion}`}>
                <Field
                  as={Input}
                  labelText={LabelSecurityForm.ANSWER}
                  name={InputNames.ANSWER}
                  type="text"
                  hasError={!!(touched.answer && errors.answer)}
                />
                <Box className={classes.helperText}>
                  <Box>
                    <FormError additionalClass={classes.text} name={InputNames.ANSWER} />
                  </Box>
                  <Box
                    className={`${classes.counterText} ${
                      classes[
                        (values.answer.length < MIN_LENGTH_SECURITY_QUESTION &&
                          values.answer.length > INITIAL_VALUE_ANSWER) ||
                        values.answer.length > CHARACTER_LIMIT
                          ? ERROR_COLOR
                          : ''
                      ]
                    }`}
                  >
                    {values.answer.length}/{CHARACTER_LIMIT}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.buttons}>
              <PrimaryButton className={classes.button} type={ButtonType.SUBMIT} isDisabled={!(dirty && isValid)}>
                {t('buttonNames.submit')}
              </PrimaryButton>
              <SecondaryButton className={classes.button} type={ButtonType.RESET}>
                {t('buttonNames.cancel')}
              </SecondaryButton>
            </Box>
          </Form>
        )}
      </Formik>
      <ModalConfirmation isOpened={isModalOpened} onClose={closeModalHandler} maxWidth="600px">
        <Box className={classes.modalCloseButton}>
          <CloseButton size={Size.MEDIUM} onClick={closeModalHandler} />
        </Box>
        <CheckmarkIcon className={classes.modalIcon} />
        <Box className={classes.modalText}>Secure question changed successfully</Box>
      </ModalConfirmation>
    </>
  );
};
