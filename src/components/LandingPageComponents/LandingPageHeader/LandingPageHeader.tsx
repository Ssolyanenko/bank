import { CSSProperties, FC, ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Box, Container, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { PhoneIcon, AppLogoIcon, LocationIcon, DollarIcon, LogOutIcon } from 'assets';
import { requestUserLogout, getUserAccount, getUserLogin } from 'store';
import { useTypedSelector, useTypedDispatch } from 'hooks';
import { ButtonType } from 'interfaces/common/componentsSettings';
import { AVATAR } from 'constants/avatar';
import { RoutingPaths } from 'constants/routingPaths';
import { Button } from 'components/_basic';
import classes from './LandingPageHeader.module.scss';

interface Props {
  changeColor: CSSProperties;
  iconsColor: string;
  iconsSize: string;
}

export const LandingPageHeader: FC<Props> = ({ changeColor, iconsColor, iconsSize }): ReactElement => {
  const { isAuth, isSMSAuth, isSMSOpen, isFirstLogin } = useTypedSelector(getUserLogin);
  const { firstName, lastName } = useTypedSelector(getUserAccount);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isLoggedIn = isAuth && !isSMSAuth && !isSMSOpen && !isFirstLogin;

  const handleUserLogout = (): void => {
    navigate('/');
    dispatch(requestUserLogout());
  };

  return (
    <Container className={classes.container} maxWidth={false}>
      <Toolbar className={classes.headerRow}>
        <Link to={isAuth ? RoutingPaths.MAIN_PAGE_URL : '/'} className={classes.logoWrapper}>
          <Box className={classes.headerLinkLogo}>
            <AppLogoIcon className={classes.appLogo} />
            <Box component="span" className={classes.appLogoName}>
              {t('landingPageHeader.appLogo')}
            </Box>
          </Box>
        </Link>
        <Box className={classes.headerLinkGroup}>
          <Link to={isAuth ? `${RoutingPaths.MAIN_PAGE_URL}/branches` : '/branches'}>
            <Box className={classes.headerLink}>
              <LocationIcon iconsColor={iconsColor} size={iconsSize} />
              <Box component="span" style={changeColor} className={classes.linkPages}>
                {t('landingPageHeader.links.branches')}
              </Box>
            </Box>
          </Link>
          <Link to={isAuth ? `${RoutingPaths.MAIN_PAGE_URL}/currency-rate` : '/currency-rate'}>
            <Box className={classes.headerLink}>
              <DollarIcon iconsColor={iconsColor} size={iconsSize} />
              <Box component="span" style={changeColor} className={classes.linkPages}>
                {t('landingPageHeader.links.currencyRate')}
              </Box>
            </Box>
          </Link>
          <Link to={isAuth ? `${RoutingPaths.MAIN_PAGE_URL}/contacts` : '/contacts'}>
            <Box className={classes.headerLink}>
              <PhoneIcon iconsColor={iconsColor} size={iconsSize} />
              <Box component="span" style={changeColor} className={classes.linkPages}>
                {t('landingPageHeader.links.contacts')}
              </Box>
            </Box>
          </Link>
          {isLoggedIn && (
            <Box className={classes.headerLogoutGroup}>
              <Link to={`${RoutingPaths.MAIN_PAGE_URL}/${RoutingPaths.USER_ACCOUNT}`}>
                <Box className={classes.headerLink}>
                  <Avatar src={AVATAR} alt={AVATAR} sx={{ width: 32, height: 32 }} />
                  <Box component="span" style={changeColor} className={classes.linkPages}>
                    {firstName}&nbsp;
                    {lastName}
                  </Box>
                </Box>
              </Link>
              <Button className={classes.logoutButton} type={ButtonType.BUTTON} onClick={handleUserLogout}>
                <LogOutIcon iconsColor={iconsColor} size={iconsSize} />
                <Box component="span" style={changeColor} className={classes.linkPages}>
                  {t('landingPageHeader.logOut')}
                </Box>
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </Container>
  );
};
