import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faRocket } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss'

const VolumeCards = () => {
  return (
    <div className={styles.wrapper}>
      <h2>3D Card Effect</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <FontAwesomeIcon className={styles.icon} icon={faRocket}/>
        </div>
      </div>
    </div>
  );
};

export default VolumeCards;