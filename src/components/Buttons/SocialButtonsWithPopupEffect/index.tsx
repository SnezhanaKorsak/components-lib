import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

import styles from './style.module.scss'

const icons = [faFacebookF, faTwitter, faInstagram, faGithub, faYoutube]

const SocialButtonsWithPopupEffect = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <h2>Social Buttons with popup effect</h2>

        <div className={styles.container}>
          {icons.map(icon =>
              <div className={styles.iconBlock}>
                <div className={styles.tooltip}>Facebook</div>
                <span><FontAwesomeIcon icon={icon} className={styles.icon}/></span>
              </div>
          )}
        </div>

      </div>
    </React.Fragment>
  );
};

export default SocialButtonsWithPopupEffect;