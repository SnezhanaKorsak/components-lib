import React from 'react';

import styles from './style.module.scss'

const ButtonsGroupHoverEffect = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Buttons group with hover effect</h2>

      <div className={styles.group}>
        <button className={styles.btn1}>Button 1</button>
        <button className={styles.btn2}>Button 2</button>
        <button className={styles.btn3}>Button 3</button>
        <button className={styles.btn4}>Button 4</button>
        <button className={styles.btn5}>Button 5</button>
        <button className={styles.btn6}>Button 6</button>
      </div>
    </div>
  )
};

export default ButtonsGroupHoverEffect;