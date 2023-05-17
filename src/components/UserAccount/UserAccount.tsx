import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

import { FormNotifications, GeneralInfo, SecurityForm } from 'components';
import { Tabs } from 'components/_basic';
import classes from './UserAccount.module.scss';

export const UserAccount: FC = (): ReactElement => (
  <Box className={classes.userAccount}>
    <Tabs>
      <Box title="General Info">
        <GeneralInfo />
      </Box>
      <Box title="Security">
        <SecurityForm />
      </Box>
      <Box title="Notifications">
        <FormNotifications />
      </Box>
    </Tabs>
  </Box>
);
