import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBell } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss'

const NotificationIcon = () => {
  return (
      <div className={styles.wrapper}>
        <h2>Notification icon</h2>

        <div className={styles.container}>
          <div className={styles.content}>
            <FontAwesomeIcon className={styles.icon} icon={faBell}/>
          </div>
        </div>
      </div>
  );
};

export default NotificationIcon;