import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCameraRetro,
  faComment,
  faBell,
  faGamepad,
  faMoon,
  faClipboard,
  faDroplet,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons';

import { faGem } from '@fortawesome/free-regular-svg-icons';

import styles from './style.module.scss'

const coordinates = [
  {id: 0, x: -1, y: 0, icon: faCameraRetro},
  {id: 1, x: 1, y: 0, icon: faGem},
  {id: 2, x: 0, y: -1, icon: faComment},
  {id: 3, x: 0, y: 1, icon: faBell},
  {id: 4, x: 1, y: 1, icon: faGamepad},
  {id: 5, x: -1, y: -1, icon: faMoon},
  {id: 6, x: 0, y: 0, icon: faClipboard},
  {id: 7, x: -1, y: 1, icon: faDroplet},
  {id: 8, x: 1, y: -1, icon: faStopwatch},
]

const DotsMenu = () => {
  const [active, setActive] = useState(true)

  const onClickHandler = () => setActive(!active)
  return (
    <div className={styles.wrapper}>
      <h2>9 Dots Menu</h2>

      <div className={`${styles.navigation} ${active ? styles.active : ''}`}
           onClick={onClickHandler}
      >
        {coordinates.map(({id, x, y, icon}) => {
          const transformForSpan = `translate(calc(12px * ${x}), calc(12px * ${y}))`
          const transformForActiveSpan = `translate(calc(60px * ${x}), calc(60px * ${y}))`
          const transitionDelay = `calc(0.1s * ${id})`

          return <span key={id}
                       style={{
                         transform: active ? transformForActiveSpan : transformForSpan,
                         transitionDelay
          }}>
            <FontAwesomeIcon icon={icon} className={styles.icon}/>
          </span>
        })}

      </div>
    </div>
  )
};

export default DotsMenu;