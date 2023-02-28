import React from 'react';

import styles from './style.module.scss'

const Switch = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Switch</h2>
      <label className={styles.switch}>
        <input type='checkbox' hidden/>
        <div className={styles.track}>
          <div className={styles.thumb}/>
        </div>
      </label>
    </div>
  );
};

export default Switch;