import React from 'react';

import StripedProgressBar from './StripedProgressBar';
import LinearProgressAnimation from './LinearProgressAnimation';
import InteractiveProgressBar from './InteractiveProgressBar';

import styles from './style.module.scss';


const ProgressPage = () => {
  return (
    <div className={styles.container}>
      <StripedProgressBar/>
      <LinearProgressAnimation/>
      <InteractiveProgressBar/>
    </div>
  );
};

export default ProgressPage;