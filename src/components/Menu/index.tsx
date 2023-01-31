import React, { useState } from 'react';

import { faCircleDot, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faBrush, faSpinner, faGear } from '@fortawesome/free-solid-svg-icons';

import BurgerMenu from '../Buttons/BurgerMenu';
import MenuItem from './MenuItem';

import { Path } from '../../constants';

import styles from './style.module.scss';


const menuListData = [
  { title: 'Buttons', path: Path.Buttons, icon: faCircleDot },
  { title: 'Spinners', path: Path.Spinners, icon: faSpinner },
  { title: 'Cards', path: Path.Cards, icon: faAddressCard },
  { title: 'Properties', path: Path.Properties, icon: faGear },
  { title: 'Gradients', path: Path.Gradients, icon: faBrush },
  { title: 'Other', path: Path.Other, icon: faBriefcase },
]

const Menu = () => {
  const [isOpened, setIsOpened] = useState(true)

  const navigationClassName = isOpened ? `${styles.navigation} ${styles.opened}` : styles.navigation

  const onClickHandler = (value: boolean) => setIsOpened(value)

  return (
    <div className={navigationClassName}>
      <BurgerMenu onClick={onClickHandler}/>
      <nav className={styles.nav}>
        <ul>
          {menuListData.map(({ title, icon, path }, index) =>
            <li key={index}>
              <MenuItem icon={icon} path={path} title={title}/>
            </li>)}
        </ul>
      </nav>
    </div>
  )
}

export default Menu;