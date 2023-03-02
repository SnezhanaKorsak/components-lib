import React from 'react';

import searchIcon from '../../../assets/image/search.png';

import styles from './style.module.scss'

const ButtonWithInput = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Button with input</h2>

      <input className={styles.search}
             type="search" placeholder="Search"
             style={{ backgroundImage: `url(${searchIcon})` }}
      />
    </div>
  )
};

export default ButtonWithInput;