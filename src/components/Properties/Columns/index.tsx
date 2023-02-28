import React, { useState } from 'react';

import Toggle from '../../../common/Toggle';

import styles from './style.module.scss';


const Columns = () => {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <React.Fragment>
      <div className={styles.header}>
        <Toggle isHidden={isHidden} setIsHidden={setIsHidden}/>
        <h3>columns</h3>
      </div>
      {!isHidden &&
        <div className={styles.content}>
          <div className={styles.description}>
            <p>Разбивает текст на коллонки: <br/></p>
            <code>
              columns: 3<br/>
              columns: 150px auto<br/>
            </code>
          </div>

          <div className={styles.example}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos dolor, dolorum eos fuga
            incidunt magni minima molestiae nisi odio placeat quae quam quasi quo quod reprehenderit similique sunt
            temporibus ullam, unde vel veniam veritatis voluptates? Beatae consequuntur debitis dicta error esse
            excepturi facilis fuga iusto, libero magni maxime nulla quos repudiandae rerum tempora. Architecto deleniti
            dicta eos ex magnam nemo perspiciatis qui saepe sit vitae? Ad aliquam consequuntur cumque enim est explicabo
            facilis fuga ipsum quasi vero. Aliquid culpa delectus est facere ipsum iste iure, labore magni odio quam
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default Columns;
