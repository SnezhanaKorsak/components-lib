import React, { useState } from 'react';
import Toggle from '../../../common/Toggle';

import styles from './style.module.scss'

const DropCaps = () => {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <React.Fragment>
      <div className={styles.header}>
        <Toggle isHidden={isHidden} setIsHidden={setIsHidden}/>
        <h3>::first-letter</h3>
      </div>
      {!isHidden &&
        <div className={styles.content}>
          <div className={styles.description}>
            Позволяет настраивать стили для первой буквы в абзаце
          </div>
          <div className={styles.example}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem deleniti dolorem doloremque eos
            eum facilis hic ipsum itaque, minus pariatur placeat tempora! Adipisci at deserunt dicta exercitationem iure
            iusto laudantium libero minima minus nemo nihil, saepe sint velit. Animi consectetur cumque deleniti
            explicabo non perferendis quisquam veritatis voluptas, voluptates.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem deleniti dolorem doloremque eos
            eum facilis hic ipsum itaque, minus pariatur placeat tempora! Adipisci at deserunt dicta exercitationem iure
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default DropCaps;