import React, { useState } from 'react';

import Toggle from '../../../common/Toggle';

import styles from './style.module.scss';


const TextStroke = () => {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <React.Fragment>
      <div className={styles.header}>
        <Toggle isHidden={isHidden} setIsHidden={setIsHidden}/>
        <h3>text-stroke</h3>
      </div>
      {!isHidden &&
        <div className={styles.content}>
          <div className={styles.description}>
            <p>Это сокращенная форма записи двух свойств:<br/></p>
            <code>
              text-stroke-width<br/>
              text-stroke-color<br/>
            </code>
            <p>Например, при помощи этого свойства можно сделать так, что юудет создаваться впечатление, будто у
              текста есть только контур.</p>
          </div>

          <div className={styles.example}>
            STROKE TEXT
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default TextStroke;
