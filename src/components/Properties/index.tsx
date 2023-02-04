import React from 'react';

import LineClamp from './LineClamp';
import ShapeOutside from './ShapeOutside';
import TextStroke from './TextStroke';
import SelectionPseudoElement from './SelectionPseudoElement'

import styles from './style.module.scss';

const PropertiesPage = () => {

  return <div className={styles.container}>
    <LineClamp/>
    <ShapeOutside/>
    <TextStroke/>
    <SelectionPseudoElement/>
  </div>
}

export default PropertiesPage;