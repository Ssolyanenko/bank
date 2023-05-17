import { FC, ReactElement } from 'react';
import { ErrorMessage } from 'formik';

import classes from './FormError.module.scss';

interface Props {
  name: string;
  additionalClass?: string;
}

export const FormError: FC<Props> = ({ name, additionalClass = '' }) => (
  <ErrorMessage name={name}>
    {(message): ReactElement => <div className={`${classes.error} ${additionalClass}`}>{message}</div>}
  </ErrorMessage>
);
