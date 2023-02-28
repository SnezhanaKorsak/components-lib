import React from 'react';
import Pulsing from './PulsingEffect';
import CardRotate from './3DCard';
import ModerSpinner from './ModerSpinner';
import Switch from './Switch';

import styles from './style.module.scss';

const SpinnersPage = () => {
  return (
    <div className={styles.container}>
      <Pulsing/>
      <CardRotate/>
      <ModerSpinner/>
      <Switch/>
    </div>
  );
};

export default SpinnersPage;