import React from 'react';
import TypingEffect from './TypingEffect';
import WaveEffect from './WaveEffect';
import NotificationIcon from './NotificationIcon';
import CssLabel from './CssLabel';
import AnimatedBlob from './AnimatedBlob';

import styles from './style.module.scss';

const OtherPage = () => {
  return (
    <div className={styles.container}>
      <WaveEffect/>
      <TypingEffect/>
      <NotificationIcon/>
      <CssLabel/>
      <AnimatedBlob/>
    </div>
  );
};

export default OtherPage;