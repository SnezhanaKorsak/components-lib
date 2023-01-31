import React from 'react';

import LineClamp from './LineClamp';

import styles from '../Buttons/style.module.scss';
import ShapeOutside from './ShapeOutside';
import TextStroke from './TextStroke';

const PropertiesPage = () => {

  return <div className={styles.container}>
    <LineClamp/>
    <ShapeOutside/>
    <TextStroke/>
  </div>
}

export default PropertiesPage;