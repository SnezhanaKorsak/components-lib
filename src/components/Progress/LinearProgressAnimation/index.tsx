import React from 'react';

import styles from './style.module.scss'

const LinearProgressAnimation = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Linear Progress Animation</h2>
      <div className={styles.progress}>
        <div className={styles.inner}/>
      </div>
    </div>
  );
};

export default LinearProgressAnimation;