import React from 'react';
import VolumeCards from './3DCardEffect';
import Interactive3DCardEffect from './Interactive3DCardEffect';
import GlassEffect from './GlassEffect';

import styles from './style.module.scss';

const CardsPage = () => {
  return (
    <div className={styles.container}>
      <Interactive3DCardEffect/>
      <VolumeCards/>
      <GlassEffect/>
    </div>
  );
};

export default CardsPage;