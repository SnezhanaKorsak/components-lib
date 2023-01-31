import React from 'react';
import Pulsing from './PulsingEffect';
import CardRotate from './3DCard';

import styles from './style.module.scss';

const SpinnersPage = () => {
  return (
    <div className={styles.container}>
      <Pulsing/>
      <CardRotate/>
    </div>
  );
};

export default SpinnersPage;