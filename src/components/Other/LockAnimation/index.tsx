import React, { useState } from 'react';

import styles from './style.module.scss'

const LockAnimation = () => {
  const [closed, setClosed] = useState(true)

  const onClickHandler = () => setClosed(!closed)

  return (
    <div className={styles.wrapper}>
      <h2>Lock Animation</h2>

      <div className={`${styles.container} ${closed ? styles.closed : '' }`}>
        <div className={styles.lock}>
          <svg height='70' width='70'>
            <circle cx='35' cy='35' r='30' strokeWidth='8' fill='none'/>
          </svg>
        </div>

        <div className={styles.block}>
          {closed ? 'LOCK' : 'UNLOCK'}
          <label className={styles.switch} >
            <input type='checkbox' onClick={onClickHandler} checked={!closed} hidden/>
            <div className={styles.track}>
              <div className={styles.thumb}/>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LockAnimation;