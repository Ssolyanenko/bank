import React, { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router';
import { NavLink } from 'react-router-dom';

import { MENU_SERVICES } from 'constants/menu';
import { DropDownLink } from 'components';
import classes from './Menu.module.scss';

export const Menu: FC = (): ReactElement => (
  <ul className={classes.services}>
    {MENU_SERVICES.map(({ text, icon, dropdownList, defaultPath = '' }, index) => (
      <li key={text}>
        <NavLink end={index === 0} to={defaultPath} className={classes.service}>
          {({ isActive }): ReactElement => (
            <>
              <div className={`${classes.iconContainer} ${isActive ? classes.active : ''}`}>{icon}</div>
              <h3 className={`${classes.text} ${isActive ? classes.activeText : ''}`}>{text}</h3>
            </>
          )}
        </NavLink>
        <Routes>
          <Route path={`${defaultPath}/*`} element={<DropDownLink dropdownList={dropdownList} />} />
        </Routes>
      </li>
    ))}
  </ul>
);
