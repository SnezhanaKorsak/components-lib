import React from 'react';

import burgerImage from '../../../assets/image/burger.png';

import styles from './style.module.scss';

const FoodCard = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Food Card</h2>
      <div className={styles.container}>
        <div className={styles.card}>
         <img src={burgerImage} alt='card' className={styles.image}/>
          <div className={styles.data}>
            <h1 className={styles.title}>Burger</h1>
            <span className={styles.price}>2.5$</span>
            <p className={styles.description}>Burger description goes here </p>
            <button className={styles.button}>Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;