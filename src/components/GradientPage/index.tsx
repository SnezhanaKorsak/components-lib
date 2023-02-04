import React, { ChangeEvent, useState } from 'react';

import styles from './style.module.scss';

type GradientsDataType = {
  [key: string]: {property: string, value: string}
}

const gradientsData: GradientsDataType = {
  purple: { property: 'background', value: 'linear-gradient(to bottom right, #6889ff, #c668ff)' },
  peach: { property: 'background', value: 'linear-gradient(to bottom right, #ff6868, #ff68de)' },
  sunset: { property: 'background', value: 'linear-gradient(to bottom right, #fdc639, #ff7c60)' },
  night: { property: 'background', value: 'linear-gradient(to bottom right, #403f44, #1e1b32)' },
  synthwave: { property: 'background', value: 'linear-gradient(to bottom, #ff9e68, #ff68de)' },
  grass: { property: 'background', value: 'linear-gradient(to bottom right, #45c270, #21cdc3)' },
  ocean: { property: 'background', value: 'linear-gradient(to bottom right, #587fff, #33ccfc)' },
  movingGradient: {
    property: 'backgroundImage',
    value: 'linear-gradient(to bottom right, #4affde 0%, #5b9dff 40%, #d06bff 60%, #ff34d2 100%)'
  },
};

const GradientPage = () => {
  const gradientTypes = Object.keys(gradientsData)

  const [type, setType] = useState(gradientTypes[0])

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.currentTarget.value)
  }

  const finalClassName = `${styles.container} ${styles[type]}`

  return (
    <div className={finalClassName} style={{ [gradientsData[type].property]: gradientsData[type].value }}>
      <div className={styles.info}>
        <select onChange={onChangeHandler}>
          {gradientTypes.map((type) => <option>{type}</option>)}
        </select>
        <div className={styles.description}>
          {gradientsData[type].value}
        </div>
      </div>
    </div>
  );
};

export default GradientPage;