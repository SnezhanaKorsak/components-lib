import React, { useState } from 'react';

import Toggle from '../../../common/Toggle';

import styles from './style.module.scss';


const SelectionPseudoElement = () => {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <React.Fragment>
      <div className={styles.header}>
        <Toggle isHidden={isHidden} setIsHidden={setIsHidden}/>
        <h3>::selection pseudo element</h3>
      </div>
      {!isHidden &&
        <div className={styles.content}>
          <div className={styles.description}>
            <p><code>::selection </code>
              позволяет настроить внешний вид текста при его выделении<br/>
            </p>
          </div>

          <div className={styles.example}>
            Hello world!
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default SelectionPseudoElement;
