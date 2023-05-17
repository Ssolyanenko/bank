import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field, Formik } from 'formik';

import { FormInputBox } from 'components/FormInputBox';
import { FormError } from './FormError';

import classes from './FormError.module.scss';

export default {
  title: 'Basic/Inputs/InputError',
  component: FormError,
  parameters: {
    docs: {
      description: {
        component: 'Field for error message output',
      },
    },
  },
} as ComponentMeta<typeof FormError>;
const getValidate = (values: { input: '' }): { [field: string]: string } => {
  const errors = { input: '' };

  if (!values.input) errors.input = 'The field is required to fill out';

  return errors;
};

const Template: ComponentStory<typeof FormError> = (props) => (
  <Formik initialValues={{ input: '' }} onSubmit={(): void => {}} validate={getValidate}>
    <div className={classes.storybookWrapper}>
      <Field as={FormInputBox} name="input" />
      <FormError {...props} />
    </div>
  </Formik>
);

export const WithFormInputBox = Template.bind({});

WithFormInputBox.args = {
  name: 'input',
};
