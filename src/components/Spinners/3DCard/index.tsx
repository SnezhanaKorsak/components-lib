import React from 'react';

import styles from './style.module.scss'

const CardRotate = () => {
  return (
    <div className={styles.wrapper}>
      <h2>3D Card Spinner</h2>
      <div className={styles.spinner}/>
    </div>
  );
};

export default CardRotate;