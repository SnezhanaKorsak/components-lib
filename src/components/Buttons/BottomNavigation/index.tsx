import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMicrophone, faCalendar, faClock, faEdit } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss'

const icons = [faMicrophone, faCalendar, faClock, faEdit]

const BottomNavigation = () => {
  const [activeItem, setActiveItem] = useState(0)

  const onClickHandler = (value: number) => setActiveItem(value)

  return (
    <div className={styles.wrapper}>
      <h2>Bottom Navigation</h2>
      <nav className={styles.bottomNav}>
        {icons.map((icon, index) =>
          <div className={`${styles.navItem} ${index === activeItem ? styles.active : ''}`}
               onClick={() => onClickHandler(index)}>
            <FontAwesomeIcon icon={icon}/>
          </div>)}
      </nav>
    </div>
  );
};

export default BottomNavigation;