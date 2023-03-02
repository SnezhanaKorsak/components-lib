import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import {
  faPlus,
  faHome,
  faUser,
  faGear,
  faEnvelope,
  faVideo,
  faKey,
  faGamepad,
  faCameraRetro
} from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss'

const icons = [faHome, faUser, faGear, faEnvelope, faVideo, faKey, faGamepad, faCameraRetro]

const AnimatedCircularNavigation = () => {

  const [active, setActive] = useState(true)
  const [selectedListItem, setSelectedListItem] = useState(0)

  const addActive = () => setActive(!active)

  const chooseItem = (index: number) => () => setSelectedListItem(index)

  return (
    <div className={styles.wrapper}>
      <h2>Bottom Navigation</h2>

      <ul className={`${styles.menu} ${active ? styles.active : ''}`}>
        <div className={`${styles.toggle} ${active ? styles.active : ''}`} onClick={addActive}>
          <FontAwesomeIcon icon={faPlus}/>
        </div>

        {icons.map((icon, index) => {
          let transformLi = `rotate(calc(360deg / 8 * ${index})) translateX(40px)`
          let transformLiActive = `rotate(calc(360deg / 8 * ${index})) translateX(12px)`
          let transformA = `rotate(calc(360deg / -8 * ${index}))`

          return (
            <li key={index}
                style={{transform: selectedListItem === index ? transformLiActive :transformLi}}
                onClick={chooseItem(index)}
                className={selectedListItem === index ? styles.active : ''}
            >
              <Link to="#" style={{transform: transformA}}><FontAwesomeIcon icon={icon}/></Link>
            </li>
          )
        })}

        <div className={styles.indicator}>

        </div>

      </ul>
    </div>
  );
};

export default AnimatedCircularNavigation;