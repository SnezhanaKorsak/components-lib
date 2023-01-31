import React from 'react';
import Pulsing from './PulsingEffect';

import styles from './style.module.scss';

const SpinnersPage = () => {
  return (
    <div className={styles.container}>
      <Pulsing/>
    </div>
  );
};

export default SpinnersPage;