import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { APP_STORE_URL, GOOGLE_PLAY_URL } from 'constants/requestUrls';
import { ContactsInformation } from 'components';
import { AppStoreIcon, GooglePlayIcon } from 'assets';
import classes from './ContactsFooter.module.scss';

export const ContactsFooter: FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  if (pathname === '/branches' || pathname === '/main-page/branches') {
    return null;
  }

  return (
    <footer className={classes.footer}>
      <ContactsInformation location="footer" />
      <Box className={classes.contacts}>
        <Box className={classes.legalAddress}>
          <Box component="span" className={classes.title}>
            {t('contactsFooter.legalAddress')}
          </Box>
          <Box component="span" className={classes.text}>
            {t('contactsFooter.streetName')}
            <br />
            {t('contactsFooter.cityAndPostCode')}
          </Box>
        </Box>
        <ul className={classes.linkStore}>
          <li className={classes.iconFooter}>
            <a href={APP_STORE_URL}>
              <AppStoreIcon />
            </a>
          </li>
          <li className={classes.iconFooter}>
            <a href={GOOGLE_PLAY_URL}>
              <GooglePlayIcon />
            </a>
          </li>
        </ul>
      </Box>
    </footer>
  );
};
