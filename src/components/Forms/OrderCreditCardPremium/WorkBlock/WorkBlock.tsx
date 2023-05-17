import { FC, ReactElement, useEffect, useState } from 'react';
import { Field, useField } from 'formik';

import { Checkbox, DropDown, FormError, RadioButtonsGroup } from 'components/_basic';
import { FormInputBox } from 'components';
import {
  EnumerationsForm,
  LabelsWorkBlock,
  InputWorkBlock,
  PlaceholdersWorkBlock,
  RadionButtonsWorkBlock,
  WorkStatus,
  ValueToBEWork,
  NamesToBEWork,
} from 'constants/formInputs';
import classes from './WorkBlock.module.scss';

interface Props {
  setFieldValue(field: string, value: string, shouldValidate?: boolean): void;
  dropdownError: string;
}

export const WorkBlock: FC<Props> = ({ setFieldValue, dropdownError }): ReactElement => {
  const [work] = useField(InputWorkBlock.WORK);
  const [workForMyselfCheck] = useField(InputWorkBlock.WORK_FOR_MYSELF_CHECK);
  const [unemployed, , unemployedHelpers] = useField(InputWorkBlock.UNEMPLOYED);
  const [workForHireCompany] = useField(InputWorkBlock.WORK_FOR_HIRE_COMPANY);
  const [workForHireTitle] = useField(InputWorkBlock.WORK_FOR_HIRE_JOB_TITLE);
  const [workForMyselfCompany] = useField(InputWorkBlock.WORK_FOR_MYSELF_COMPANY);
  const [workForMyselfOccupation] = useField(InputWorkBlock.WORK_FOR_MYSELF_OCCUPATION);
  const [unemployedOthers] = useField(InputWorkBlock.UNEMPLOYED_OTHERS);

  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  useEffect(() => {
    const WorkNameValues: { [field: string]: string } = {
      WORK_FOR_HIRE: workForHireTitle.value,
    };
    const WorkOccupationValues: { [field: string]: boolean } = {
      WORK_FOR_HIRE: workForHireCompany.value,
      WORK_FOR_MYSELF: workForMyselfCompany.value,
    };
    const WorkInformallyValues: { [field: string]: string } = {
      WORK_FOR_MYSELF: workForMyselfCheck.value,
    };
    const UnemployedOtherValues: { [field: string]: string } = {
      OTHERS: unemployedOthers.value,
    };
    const placeOfWorkType = ValueToBEWork[work.value];
    const placeOfWorkName = WorkNameValues[placeOfWorkType] || '';
    const isWorkInformally = WorkInformallyValues[placeOfWorkType];
    const placeOfWorkOccupation = isWorkInformally
      ? workForMyselfOccupation.value
      : WorkOccupationValues[placeOfWorkType] || '';
    const unemployedType = ValueToBEWork[unemployed.value] || '';
    const causeOfUnemployment =
      (placeOfWorkType === ValueToBEWork.Unemployed && UnemployedOtherValues[unemployedType]) || '';

    setFieldValue(NamesToBEWork.TYPE, placeOfWorkType);
    setFieldValue(NamesToBEWork.NAME, placeOfWorkName);
    setFieldValue(NamesToBEWork.INFORMALLY, isWorkInformally);
    setFieldValue(NamesToBEWork.OCCUPATION, placeOfWorkOccupation);
    setFieldValue(NamesToBEWork.UNEMPLOYED, unemployedType);
    setFieldValue(NamesToBEWork.UNEMPLOYED_OTHERS, causeOfUnemployment);
  }, [
    setFieldValue,
    workForHireTitle.value,
    workForHireCompany.value,
    workForMyselfCompany.value,
    workForMyselfCheck.value,
    unemployed.value,
    unemployedOthers.value,
    work.value,
    workForMyselfOccupation.value,
  ]);

  return (
    <div className={classes.componentWrapper}>
      <div className={classes.elementWrapper}>
        <Field
          as={DropDown}
          label={LabelsWorkBlock.WORK}
          enumerations={EnumerationsForm.WORK}
          name={InputWorkBlock.WORK}
          placeholder={PlaceholdersWorkBlock.WORK}
          onClick={(): void => setIsDropdownClicked(true)}
        />
        {isDropdownClicked && <div className={classes.error}>{dropdownError}</div>}
      </div>
      {work.value === WorkStatus.FOR_HIRE && (
        <>
          <div className={classes.elementWrapper}>
            <div className={classes.secondColumn}>
              <FormInputBox
                name={InputWorkBlock.WORK_FOR_HIRE_JOB_TITLE}
                label={LabelsWorkBlock.WORK_FOR_HIRE_JOB_TITLE}
                placeholder={PlaceholdersWorkBlock.WORK_FOR_HIRE_JOB_TITLE}
                isRequired
              />
              <FormError name={InputWorkBlock.WORK_FOR_HIRE_JOB_TITLE} />
            </div>
          </div>
          <div className={classes.elementWrapper}>
            <FormInputBox
              name={InputWorkBlock.WORK_FOR_HIRE_COMPANY}
              label={LabelsWorkBlock.WORK_FOR_HIRE_COMPANY}
              placeholder={PlaceholdersWorkBlock.WORK_FOR_HIRE_COMPANY}
              isRequired
            />
            <FormError name={InputWorkBlock.WORK_FOR_HIRE_COMPANY} />
          </div>
        </>
      )}
      {work.value === WorkStatus.FOR_MYSELF && !workForMyselfCheck.value && (
        <div className={classes.elementWrapper}>
          <div className={classes.secondColumn}>
            <FormInputBox
              name={InputWorkBlock.WORK_FOR_MYSELF_COMPANY}
              label={LabelsWorkBlock.WORK_FOR_MYSELF_COMPANY}
              placeholder={PlaceholdersWorkBlock.WORK_FOR_MYSELF_COMPANY}
              isRequired
            />
            <FormError name={InputWorkBlock.WORK_FOR_MYSELF_COMPANY} />
          </div>
        </div>
      )}
      {work.value === WorkStatus.FOR_MYSELF && workForMyselfCheck.value && (
        <div className={classes.elementWrapper}>
          <div className={classes.secondColumn}>
            <FormInputBox
              name={InputWorkBlock.WORK_FOR_MYSELF_OCCUPATION}
              label={LabelsWorkBlock.WORK_FOR_MYSELF_OCCUPATION}
              placeholder={PlaceholdersWorkBlock.WORK_FOR_MYSELF_OCCUPATION}
              isRequired
            />
            <FormError name={InputWorkBlock.WORK_FOR_MYSELF_OCCUPATION} />
          </div>
        </div>
      )}
      {work.value === WorkStatus.FOR_MYSELF && (
        <div className={classes.elementWrapper}>
          <Field as={Checkbox} name={InputWorkBlock.WORK_FOR_MYSELF_CHECK}>
            {LabelsWorkBlock.WORK_FOR_MYSELF_CHECK}
          </Field>
        </div>
      )}
      {work.value === WorkStatus.UNEMPLOYED && (
        <>
          <div className={classes.elementWrapper}>
            <Field
              as={RadioButtonsGroup}
              name={InputWorkBlock.UNEMPLOYED}
              radioGroupArray={RadionButtonsWorkBlock.UNEMPLOYED}
              onChange={(value: string): void => unemployedHelpers.setValue(value)}
              defaultChecked="pensioner"
            />
          </div>
          <FormError name={InputWorkBlock.UNEMPLOYED} />
          {work.value === WorkStatus.UNEMPLOYED && unemployed.value === 'others' && (
            <div className={classes.elementWrapper}>
              <FormInputBox
                name={InputWorkBlock.UNEMPLOYED_OTHERS}
                label={LabelsWorkBlock.UNEMPLOYED_OTHERS}
                placeholder={PlaceholdersWorkBlock.UNEMPLOYED_OTHERS}
                isRequired
              />
              <FormError name={InputWorkBlock.UNEMPLOYED_OTHERS} />
            </div>
          )}
        </>
      )}
    </div>
  );
};
