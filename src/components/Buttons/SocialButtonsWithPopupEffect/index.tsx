import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

import styles from './style.module.scss'

const SocialButtonsWithPopupEffect = () => {
  return (
    <React.Fragment>
      <h2>Social Buttons with popup effect</h2>

      <div className={styles.wrapper}>

        <div className={styles.iconBlock}>
          <div className={styles.tooltip}>Facebook</div>
          <span>
          <FontAwesomeIcon icon={faFacebookF} className={styles.icon}/>
        </span>
        </div>

        <div className={styles.iconBlock}>
          <div className={styles.tooltip}>Instagram</div>
          <span>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon}/>
        </span>
        </div>

        <div className={styles.iconBlock}>
          <div className={styles.tooltip}>Twitter</div>
          <span>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
        </span>
        </div>

        <div className={styles.iconBlock}>
          <div className={styles.tooltip}>GitHub</div>
          <span>
          <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
        </span>
        </div>

        <div className={styles.iconBlock}>
          <div className={styles.tooltip} >Youtube</div>
          <span>
          <FontAwesomeIcon icon={faYoutube} className={styles.icon}/>
        </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SocialButtonsWithPopupEffect;