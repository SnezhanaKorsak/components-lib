import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart, faComment, faBookBookmark } from '@fortawesome/free-solid-svg-icons';

import backgroundImage from '../../../assets/image/sky-background.jpg';
import user from '../../../assets/image/user.jpg';

import styles from './style.module.scss';

const ProfileCard = () => {

  return (
    <div className={styles.wrapper}>
      <h2>Profile Card</h2>
      <div className={styles.card}>

        <div className={styles.header}>
         <img src={user} alt='image'/>
          <div>
            <p>Giorgio Trovato</p>
            <p>@giorgio44</p>
          </div>
        </div>

        <div className={styles.body}>
          <img src={backgroundImage} alt='image'/>
        </div>

        <div className={styles.footer}>
          <FontAwesomeIcon icon={faHeart}/>
          <FontAwesomeIcon icon={faComment}/>
          <FontAwesomeIcon icon={faBookBookmark}/>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;