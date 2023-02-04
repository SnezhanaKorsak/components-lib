import React from 'react';

import styles from './style.module.scss'

const StripedProgressBar = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Striped Progress Bar</h2>
      <div className={styles.progress}/>
    </div>
  );
};

export default StripedProgressBar;