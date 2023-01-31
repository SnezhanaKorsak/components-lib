import React from 'react';
import VolumeCards from './3DCardEffect';

import styles from './style.module.scss';

const CardsPage = () => {
  return (
    <div className={styles.container}>
      <VolumeCards/>
    </div>
  );
};

export default CardsPage;