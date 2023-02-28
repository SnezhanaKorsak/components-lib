import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';

const ProfileCardTwo = () => {

  return (
    <div className={styles.wrapper}>
      <h2>Profile Card</h2>
      <div className={styles.card}>

        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUserAlt}/>
        </div>

        <h4>Profile</h4>
        <p>Click to see or edit your profile page</p>
      </div>
    </div>
  );
};

export default ProfileCardTwo;