import React from 'react';

import styles from './style.module.scss'

const WaveEffect = () => {
  return (
      <div className={styles.wrapper}>
        <h2>Wave Effect</h2>

        <div className={styles.container}>
          <div className={styles.circle}/>
        </div>
      </div>
  );
};

export default WaveEffect;