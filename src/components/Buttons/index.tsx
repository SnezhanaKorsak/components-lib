import React from 'react';
import SocialButtonsWithPopupEffect from './SocialButtonsWithPopupEffect';
import BottomNavigation from './BottomNavigation';
import ButtonsGroupHoverEffect from './ButtonsGroupHoverEffect';
import SocialMediaIconsHoverEffect from './SocialMediaIconsHoverEffect';

import styles from './style.module.scss'

const ButtonsPage = () => {
  return <div className={styles.container}>
    <SocialButtonsWithPopupEffect/>
    <BottomNavigation/>
    <ButtonsGroupHoverEffect/>
    <SocialMediaIconsHoverEffect/>
  </div>
}

export default ButtonsPage;