import React from 'react';
import Pulsing from './PulsingEffect';
import CardRotate from './3DCard';
import ModerSpinner from './ModerSpinner';

import styles from './style.module.scss';

const SpinnersPage = () => {
  return (
    <div className={styles.container}>
      <Pulsing/>
      <CardRotate/>
      <ModerSpinner/>
    </div>
  );
};

export default SpinnersPage;