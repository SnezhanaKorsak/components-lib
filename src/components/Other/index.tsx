import React from 'react';
import TypingEffect from './TypingEffect';
import WaveEffect from './WaveEffect';

import styles from './style.module.scss';

const OtherPage = () => {
  return (
    <div className={styles.container}>
      <TypingEffect/>
      <WaveEffect />
    </div>
  );
};

export default OtherPage;