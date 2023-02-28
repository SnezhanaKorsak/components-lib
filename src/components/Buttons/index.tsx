import React from 'react';
import SocialButtonsWithPopupEffect from './SocialButtonsWithPopupEffect';
import BottomNavigation from './BottomNavigation';
import ButtonsGroupHoverEffect from './ButtonsGroupHoverEffect';

import styles from './style.module.scss'

const ButtonsPage = () => {
  return <div className={styles.container}>
    <SocialButtonsWithPopupEffect/>
    <BottomNavigation/>
    <ButtonsGroupHoverEffect/>
  </div>
}

export default ButtonsPage;