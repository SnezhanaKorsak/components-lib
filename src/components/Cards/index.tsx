import React from 'react';
import VolumeCards from './3DCardEffect';
import Interactive3DCardEffect from './Interactive3DCardEffect';
import GlassEffect from './GlassEffect';
import ProfileCard from './ProfileCard';
import ProfileCardTwo from './ProfileCardTwo';
import FoodCard from './FoodCard';
import ScrollToTop from './ScrollToTop';
import ProfileCardAnimated from './ProfileCardAnimated';

import styles from './style.module.scss';

const CardsPage = () => {
  return (
    <div className={styles.container}>
      <Interactive3DCardEffect/>
      <VolumeCards/>
      <GlassEffect/>
      <ProfileCard/>
      <ProfileCardTwo/>
      <ScrollToTop/>
      <ProfileCardAnimated/>
      <FoodCard/>
    </div>
  );
};

export default CardsPage;