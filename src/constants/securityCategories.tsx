import React from 'react';

import { ChangePassword } from 'components/Forms/Security/ChangePassword';
import { ChangeSecurityQuestion } from 'components/Forms/Security/ChangeSecurityQuestion';
import { AvailableTabs, Categories } from 'interfaces/securityTabs';

export const CHARACTER_LIMIT = 50;

export const SECURITY_TABS: Record<AvailableTabs, React.ReactElement> = {
  0: <ChangePassword />,
  1: <ChangeSecurityQuestion />,
};

export const CATEGORIES: Categories[] = [
  { id: 0, tabTitle: 'Change password' },
  { id: 1, tabTitle: 'Change security question' },
];
