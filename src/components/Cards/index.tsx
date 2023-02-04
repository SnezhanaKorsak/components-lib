import React from 'react';
import VolumeCards from './3DCardEffect';
import Interactive3DCardEffect from './Interactive3DCardEffect';

import styles from './style.module.scss';

const CardsPage = () => {
  return (
    <div className={styles.container}>
      <VolumeCards/>
      <Interactive3DCardEffect/>
    </div>
  );
};

export default CardsPage;