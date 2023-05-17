import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ContactsInformation } from 'components';
import { BackButton, ChatButton } from 'components/_basic';
import { MAIN } from 'constants/contacts';
import { RoutingPaths } from 'constants/routingPaths';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getIsAuth } from 'store';
import classes from './Contacts.module.scss';

export const Contacts: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isAuth = useTypedSelector(getIsAuth);

  const handleBack = (): void => {
    navigate(isAuth ? `/${RoutingPaths.MAIN_PAGE_URL}` : '/');
  };

  return (
    <>
      <Box className={classes.main}>
        <Box className={classes.contacts}>
          <Box className={classes.backButtonContainer}>
            <BackButton handleBack={handleBack}>{t('buttonNames.back')}</BackButton>
          </Box>
          <Box component="h2" className={classes.mainText}>
            {t('contacts.title')}
          </Box>
        </Box>
        <ContactsInformation location={MAIN} />
        <Box className={classes.infoNotice}>
          <Box component="span" className={classes.infoNoticeBackground}>
            {t('contacts.infoNotice')}
          </Box>
        </Box>
      </Box>
      <ChatButton />
    </>
  );
};
