import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Formik } from 'formik';

import { Input } from './Input';

export default {
  title: 'Basic/Inputs/BaseInput',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: 'Reusable Input for Forms',
      },
    },
  } as ComponentMeta<typeof Input>,
};
const getValidate = (values: { input: '' }): { [field: string]: string } => {
  const errors = { input: '' };

  if (!values.input) errors.input = 'The field is required to fill out';

  return errors;
};

const Template: ComponentStory<typeof Input> = (props) => (
  <Formik initialValues={{ input: '' }} onSubmit={(): void => {}} validate={getValidate}>
    {({ values, handleChange }) => <Input {...props} value={values.input} onChange={handleChange} />}
  </Formik>
);

export const Default = Template.bind({});

Default.args = {
  labelText: 'text',
  name: 'input',
  type: 'text',
  onChange(): void {},
  onBlur(): void {},
  isDisabled: false,
};
