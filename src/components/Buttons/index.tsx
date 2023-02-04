import React from 'react';
import SocialButtonsWithPopupEffect from './SocialButtonsWithPopupEffect';
import BottomNavigation from './BottomNavigation';

import styles from './style.module.scss'

const ButtonsPage = () => {
  return <div className={styles.container}>
    <SocialButtonsWithPopupEffect/>
    <BottomNavigation/>
  </div>
}

export default ButtonsPage;