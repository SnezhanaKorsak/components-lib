import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import styles from './style.module.scss'

const icons = [faInstagram, faFacebookF, faWhatsapp, faTwitter]

const SocialMediaIconsHoverEffect = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <h2>Social media icons hover effect</h2>

        <div className={styles.container}>
          {icons.map(icon =>
              <div className={styles.iconBlock}>
               <svg height='70' width='70'>
                 <circle cx='35' cy='35' r='30' stroke='white' strokeWidth='4' fill='none'/>
               </svg>
                <FontAwesomeIcon icon={icon} className={styles.icon}/>
              </div>
          )}
        </div>

      </div>
    </React.Fragment>
  );
};

export default SocialMediaIconsHoverEffect;