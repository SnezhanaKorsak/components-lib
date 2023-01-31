import React, { ChangeEvent, useState } from 'react';

import styles from './style.module.scss';

const gradientsData: { [key: string]: string } = {
  purple: 'linear-gradient(to bottom right, #6889ff, #c668ff)',
  peach: 'linear-gradient(to bottom right, #ff6868, #ff68de)',
  sunset: 'linear-gradient(to bottom right, #fdc639, #ff7c60)',
  night: 'linear-gradient(to bottom right, #403f44, #1e1b32)',
  synthwave: 'linear-gradient(to bottom, #ff9e68, #ff68de)',
  grass: 'linear-gradient(to bottom right, #45c270, #21cdc3)',
  ocean: 'linear-gradient(to bottom right, #587fff, #33ccfc)',
}

const GradientPage = () => {
  const gradientTypes = Object.keys(gradientsData)

  const [type, setType] = useState(gradientTypes[0])

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.currentTarget.value)
  }

  return (
    <div className={styles.container} style={{ background: gradientsData[type] }}>
      <div className={styles.info}>
        <select onChange={onChangeHandler}>
          {gradientTypes.map((type) => <option>{type}</option>)}
        </select>
        <div className={styles.description}>
          { gradientsData[type]}
        </div>
      </div>
    </div>
  );
};

export default GradientPage;