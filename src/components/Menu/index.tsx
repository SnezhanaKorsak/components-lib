import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { faCircleDot } from '@fortawesome/free-regular-svg-icons/faCircleDot';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';

import BurgerMenu from '../Buttons/BurgerMenu';

import { Path } from '../../constants';

import styles from './Menu.module.scss'

const Menu = () => {
  const [isOpened, setIsOpened] = useState(true)

  const navigationClassName = isOpened ? `${styles.navigation} ${styles.opened}` : styles.navigation

  const onClickHandler = (value: boolean) => setIsOpened(value)

  return (
    <div className={navigationClassName}>
      <BurgerMenu onClick={onClickHandler}/>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to={Path.Buttons}>
              <FontAwesomeIcon className={styles.icon} icon={faCircleDot}/>
              Buttons
            </NavLink>
          </li>
          <li>
            <NavLink to={Path.Other}>

              <FontAwesomeIcon className={styles.icon} icon={faBriefcase}/>
              Other
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;