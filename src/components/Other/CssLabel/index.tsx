import React from 'react';

import styles from './style.module.scss'

const CssLabel = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Css Label</h2>

      <div className={styles.container}>
        <div className={styles.label}>20% Off</div>
      </div>
    </div>
  );
};

export default CssLabel;