import React from 'react';

import user from '../../../assets/image/avatar.jpg';

import styles from './style.module.scss';

const ProfileCardAnimated = () => {

  return (
    <div className={styles.wrapper}>
      <h2>Profile Card with animation</h2>
      <div className={styles.card}>

        <div className={styles.header}>
         <img src={user} alt='image'/>
          <div>
            <p>Alina Smith</p>
            <p>Senior UX/UI Designer</p>
          </div>
        </div>

        <div className={styles.body}>
          <div  className={styles.section}>
            <p>342</p>
            <p>Posts</p>
          </div>
          <div  className={styles.section}>
            <p>120k</p>
            <p>Followers</p>
          </div>
          <div  className={styles.section}>
            <p>285</p>
            <p>Following</p>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.button}>Follow</button>
          <button className={styles.button}>Message</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardAnimated;