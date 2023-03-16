import React from 'react';
import SocialButtonsWithPopupEffect from './SocialButtonsWithPopupEffect';
import BottomNavigation from './BottomNavigation';
import ButtonsGroupHoverEffect from './ButtonsGroupHoverEffect';
import SocialMediaIconsHoverEffect from './SocialMediaIconsHoverEffect';
import ButtonsWithTooltip from './ButtonsWithTooltip';
import ButtonWithInput from './ButtonWithInput';
import AnimatedCircularNavigation from './AnimatedCircularNavigation';
import DotsMenu from './DotsMenu';

import styles from './style.module.scss';

const ButtonsPage = () => {
  return (
    <div className={styles.container}>
      <DotsMenu/>
      <AnimatedCircularNavigation/>
      <SocialButtonsWithPopupEffect/>
      <BottomNavigation/>
      <ButtonsGroupHoverEffect/>
      <SocialMediaIconsHoverEffect/>
      <div className={styles.block}>
        <ButtonsWithTooltip/>
        <ButtonWithInput/>
      </div>
    </div>
  );
};

export default ButtonsPage;