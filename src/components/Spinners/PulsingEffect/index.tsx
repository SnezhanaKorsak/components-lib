import React from 'react';

import styles from './style.module.scss'

const Pulsing = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Pulsing Effect</h2>
      <div className={styles.pulse}/>
    </div>
  );
};

export default Pulsing;