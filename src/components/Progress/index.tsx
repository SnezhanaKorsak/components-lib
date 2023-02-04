import React from 'react';

import StripedProgressBar from './StripedPragressBar';

import styles from './style.module.scss';

const ProgressPage = () => {
  return (
    <div className={styles.container}>
      <StripedProgressBar/>
    </div>
  );
};

export default ProgressPage;