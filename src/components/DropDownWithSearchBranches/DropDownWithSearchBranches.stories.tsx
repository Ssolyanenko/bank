import { ReactElement } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field, Formik } from 'formik';

import { MOCK_BRANCHES } from 'constants/branch';
import { DropDownWithSearchBranches } from './DropDownWithSearchBranches';
import classes from './DropDownWithSearchBranches.module.scss';

export default {
  title: 'Basic/DropDowns/DropDownWithSearchBranches',
  component: DropDownWithSearchBranches,
  parameters: {
    docs: {
      description: {
        component: 'Component for selecting a bank address from a drop-down list with the ability of searching',
      },
    },
  },
} as ComponentMeta<typeof DropDownWithSearchBranches>;

const Template: ComponentStory<typeof DropDownWithSearchBranches> = (props) => (
  <Formik initialValues={{ bankBranchId: '' }} onSubmit={(): void => {}}>
    {({ setFieldValue }): ReactElement => (
      <div className={classes.storybookWrapper}>
        <Field as={DropDownWithSearchBranches} {...props} setFieldValue={setFieldValue} />
      </div>
    )}
  </Formik>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Bank branch',
  name: 'bankBranchId',
  placeholder: 'Select the bank',
  errorBankBranchesFound: 'Sorry, no banks are found, change the city',
  branches: MOCK_BRANCHES,
};
