import React, { useState } from 'react';

import Toggle from '../../../common/Toggle';

import styles from './style.module.scss';


const ShapeOutside = () => {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <React.Fragment>
      <div className={styles.header}>
        <Toggle isHidden={isHidden} setIsHidden={setIsHidden}/>
        <h3>shape-outside</h3>
      </div>
      {!isHidden &&
        <div className={styles.content}>
          <div className={styles.description}>
            Это свойство задает форму, вокруг которой будет обтекать текст. Можно указать, чтобы текст обтекал по кругу,
            а можно задать целую геометрическую фигуру при помощи свойства - polygon.<br/>
            <br/>
            <code>
              circle(): for making circular shapes<br/>
              ellipse(): for making elliptical shapes<br/>
              inset(): for making rectangular shapes<br/>
              polygon(): for creating any shape with 3 or more vertices<br/>
              url(): identifies which image should be used to wrap text around<br/>
              initial: the float area is unaffected<br/>
              inherit: inherits shape-outside value from parent<br/>
            </code>
          </div>

          <div className={styles.example}>
            <div className={styles.element}></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, asperiores at commodi cum distinctio
              doloremque et exercitationem fugit harum id illo in ipsum iusto necessitatibus neque, nisi, obcaecati odio
              omnis quisquam repellat reprehenderit sit vel.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, asperiores at commodi cum distinctio
              doloremque et exercitationem fugit harum id illo in ipsum iusto necessitatibus neque, nisi, obcaecati odio
              omnis quisquam repellat reprehenderit sit vel.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, asperiores at commodi cum distinctio
              doloremque et exercitationem fugit harum id illo in ipsum iusto necessitatibus neque, nisi, obcaecati odio
              omnis quisquam repellat reprehenderit sit vel.</p>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

export default ShapeOutside;
