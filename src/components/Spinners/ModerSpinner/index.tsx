import React from 'react';

import styles from './style.module.scss'

const ModerSpinner = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Moder Spinner</h2>
      <div className={styles.spinner}/>
    </div>
  );
};

export default ModerSpinner;