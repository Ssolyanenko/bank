import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { DropdownList as Props } from 'interfaces/dropdownList';
import classes from './DropDownLink.module.scss';

export const DropDownLink: FC<Props> = ({ dropdownList }): ReactElement => (
  <ul className={`${classes.linkWrapper}`}>
    {dropdownList.map(({ title, path }, index) => (
      <li key={title}>
        <NavLink
          to={path}
          className={({ isActive }): string => `${isActive ? classes.active : ''} ${classes.link}`}
          end={index === 0}
        >
          {title}
        </NavLink>
      </li>
    ))}
  </ul>
);
