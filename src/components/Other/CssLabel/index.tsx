import React from 'react';

import styles from './style.module.scss'

const CssLabel = () => {
  return (
      <div className={styles.container}>
        <h2>Css Label</h2>
        <div className={styles.label}>
          20% Off
        </div>
      </div>
  );
};

export default CssLabel;