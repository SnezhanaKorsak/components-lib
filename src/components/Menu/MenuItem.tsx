import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './style.module.scss';

type MenuItemProps = {
  icon: IconProp;
  path: string;
  title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, path, icon }) => {
  return (
    <NavLink to={path}>
      <FontAwesomeIcon className={styles.icon} icon={icon}/>
      {title}
    </NavLink>
  );
};

export default MenuItem;