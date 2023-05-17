import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { LandingPageHeader, ContactsFooter } from 'components';
import colors from 'styles/variables.module.scss';
import classes from './LayoutPage.module.scss';

export const LayoutPage: FC = (): ReactElement => (
  <Box className={classes.layout}>
    <>
      <Box className={classes.header}>
        <LandingPageHeader
          iconsColor={colors.grayDark_6}
          changeColor={{ color: colors.grayDark_6 }}
          iconsSize="1.5rem"
        />
      </Box>
      <Outlet />
    </>
    <Box className={classes.footer}>
      <ContactsFooter />
    </Box>
  </Box>
);
