import React, { useState } from 'react';

import styles from './LineClamp.module.scss'
import Toggle from '../../../common/Toggle';

const LineClamp = () => {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <React.Fragment>
      <div className={styles.header}>
        <Toggle isHidden={isHidden} setIsHidden={setIsHidden}/>
        <h3>line-clamp</h3>
      </div>
      {!isHidden &&
        <div className={styles.content}>
          <div className={styles.description}>
            Это свойство ограничивает текст заданным числом строк. Текст будет обрезаться, если количество
            строк будет превышать число, которое вы укажете в свойстве.
          </div>
          <div className={styles.example1}>
            Without line-clamp

            <div className={styles.container}>
              <div className={styles.column}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aperiam aspernatur assumenda
                autem blanditiis doloribus ea, eius error ex exercitationem explicabo fuga maxime nobis porro quod
                reiciendis rerum saepe sunt tenetur veritatis vitae voluptate? Debitis fuga odit sed veritatis!
              </div>

              <div className={styles.column}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto error est illo repellat saepe
                similique, suscipit! Delectus, fugit impedit inventore ipsam modi neque quis recusandae.
              </div>

              <div className={styles.column}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur at, cupiditate
                delectus dolor expedita facere ipsum labore quos reiciendis repellendus sapiente sequi totam voluptatum?
                Culpa deserunt minima nam pariatur possimus quam.
              </div>
            </div>
          </div>
          <div className={styles.example2}>
            With line-clamp

            <div className={styles.container}>
              <div className={styles.column}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aperiam aspernatur assumenda
                autem blanditiis doloribus ea, eius error ex exercitationem explicabo fuga maxime nobis porro quod
                reiciendis rerum saepe sunt tenetur veritatis vitae voluptate? Debitis fuga odit sed veritatis!
              </div>

              <div className={styles.column}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto error est illo repellat saepe
                similique, suscipit! Delectus, fugit impedit inventore ipsam modi neque quis recusandae.
              </div>

              <div className={styles.column}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto aspernatur at, cupiditate
                delectus dolor expedita facere ipsum labore quos reiciendis repellendus sapiente sequi totam voluptatum?
                Culpa deserunt minima nam pariatur possimus quam.
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default LineClamp;