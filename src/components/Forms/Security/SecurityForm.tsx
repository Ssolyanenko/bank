import React, { FC, useState } from 'react';
import { Box } from '@mui/material';

import { CATEGORIES, SECURITY_TABS } from 'constants/securityCategories';
import { Button } from 'components/_basic';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { AvailableTabs } from 'interfaces/securityTabs';
import classes from './SecurityForm.module.scss';

export const SecurityForm: FC = () => {
  const [activeTab, setActiveTab] = useState<AvailableTabs>(0);

  return (
    <Box className={classes.security}>
      {CATEGORIES.map(({ id, tabTitle }) => (
        <Button
          key={id}
          onClick={(): void => setActiveTab(id)}
          className={`${activeTab === id ? `${classes.active}` : ''} ${classes.tabTitle}`}
          type={ButtonType.BUTTON}
        >
          {tabTitle}
        </Button>
      ))}
      {SECURITY_TABS[activeTab]}
    </Box>
  );
};
