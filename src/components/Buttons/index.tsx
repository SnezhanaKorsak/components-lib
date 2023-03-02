import React from 'react';
import SocialButtonsWithPopupEffect from './SocialButtonsWithPopupEffect';
import BottomNavigation from './BottomNavigation';
import ButtonsGroupHoverEffect from './ButtonsGroupHoverEffect';
import SocialMediaIconsHoverEffect from './SocialMediaIconsHoverEffect';
import ButtonsWithTooltip from './ButtonsWithTooltip';
import ButtonWithInput from './ButtonWithInput';
import AnimatedCircularNavigation from './AnimatedCircularNavigation';

import styles from './style.module.scss';

const ButtonsPage = () => {
  return (
    <div className={styles.container}>
      <SocialButtonsWithPopupEffect/>
      <BottomNavigation/>
      <ButtonsGroupHoverEffect/>
      <SocialMediaIconsHoverEffect/>
      <div className={styles.block}>
        <ButtonsWithTooltip/>
        <ButtonWithInput/>
      </div>

      <AnimatedCircularNavigation/>
    </div>
  );
};

export default ButtonsPage;