import React, { Dispatch, FC, ReactElement, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';
import { useParams } from 'react-router';

import { useTypedDispatch } from 'hooks';
import { activateBlockCard, getActivateBlockCardError, getActivateBlockCardSuccess } from 'store';
import { Checkbox, CloseButton, Modal, PrimaryButton, SecondaryButton } from 'components/_basic';
import { ModalWrapper } from 'interfaces/ModalWrapper';
import { ButtonType, Size } from 'interfaces/common/componentsSettings';
import { ChangeCardStatus } from 'constants/cardActivateBlockText';
import { ACTIVATE_USER_CARD, BLOCK_USER_CARD } from 'constants/requestUrls';
import classes from './ActivateBlockCardModal.module.scss';

interface Props extends ModalWrapper {
  text: string;
  buttonName: string;
  terms: string;
  activateBlockCardHandler(): void;
  hasCardStatus: boolean;
  setIsCardBlock: Dispatch<SetStateAction<boolean>>;
}

export const ActivateBlockCardModal: FC<Props> = ({
  isOpen,
  handleClose,
  text,
  buttonName,
  activateBlockCardHandler,
  terms,
  hasCardStatus,
  setIsCardBlock,
}): ReactElement => {
  const dispatch = useTypedDispatch();
  const { t } = useTranslation();
  const { cardId = '0' } = useParams();

  const [isTermsClicked, setIsTermsClicked] = useState(false);

  const handleChange = (): void => {
    setIsTermsClicked((prevIsTermsClicked): boolean => !prevIsTermsClicked);
  };

  return (
    <Formik
      initialValues={{
        cardId,
        isChangeStatusAgreed: isTermsClicked,
      }}
      onSubmit={async ({ cardId, isChangeStatusAgreed }, { resetForm }): Promise<void> => {
        activateBlockCardHandler();
        await dispatch(
          activateBlockCard({
            cardId,
            isChangeStatusAgreed,
            url: hasCardStatus ? BLOCK_USER_CARD : ACTIVATE_USER_CARD,
            actionSuccess: getActivateBlockCardSuccess,
            actionError: getActivateBlockCardError,
          })
        );
        setIsCardBlock((prev): boolean => !prev);
        resetForm();
      }}
    >
      {({ isValid, dirty, submitForm }): ReactElement => (
        <Form>
          <Modal isOpen={isOpen} handleClose={handleClose}>
            <div className={classes.lockCardModalWrapper}>
              <CloseButton className={classes.closeButton} onClick={handleClose} size={Size.MEDIUM} />
              <div className={classes.contentWrapper}>
                <h3 className={classes.title}>{t('activateBlockCardContent.status')}</h3>
                <div className={`${classes.contentText} ${classes[buttonName]}`}>
                  <div className={classes.textAgreed}>
                    <Field as={Checkbox} name={ChangeCardStatus.IS_TERMS_AGREED} checked={handleChange}>
                      <div className={classes.text}>
                        <h3 className={classes.titleInner}>{text}</h3>
                        <p>{terms}</p>
                      </div>
                    </Field>
                  </div>
                </div>

                <div className={classes.buttonWrapper}>
                  <PrimaryButton
                    className={classes.controlButton}
                    type={ButtonType.SUBMIT}
                    isDisabled={!(dirty && isValid)}
                    onClick={submitForm}
                  >
                    {buttonName}
                  </PrimaryButton>
                  <SecondaryButton className={classes.controlButton} type={ButtonType.BUTTON} onClick={handleClose}>
                    {t('buttonNames.cancel')}
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </Modal>
        </Form>
      )}
    </Formik>
  );
};
