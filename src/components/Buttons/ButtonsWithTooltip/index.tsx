import React from 'react';

import styles from './style.module.scss'

const ButtonsWithTooltip = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Buttons with tooltip</h2>

      <div className={styles.group}>
        <button title='Description'>Button 1</button>
        <div className={styles.hasTooltip}>
          <button>Button 2</button>
          <p className={styles.tooltip}>Description</p>
        </div>
      </div>
    </div>
  )
};

export default ButtonsWithTooltip;