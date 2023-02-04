import React from 'react';

import backgroundImage from '../../../assets/image/sky-background.jpg'

import styles from './style.module.scss';

const GlassEffect = () => {

  return (
    <div className={styles.wrapper}>
      <h2>Card with Glass Effect</h2>
      <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={styles.card}>
          Hello world!
        </div>
      </div>
    </div>
  );
};

export default GlassEffect;