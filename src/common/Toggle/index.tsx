import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

import styles from './Toggle.module.scss';

type ToggleProps = {
  isHidden: boolean
  setIsHidden: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ isHidden, setIsHidden }) => {
  const finalClassName = isHidden ? styles.iconClose : styles.iconOpen

  const onClickHandler = () => setIsHidden(!isHidden)

  return (
    <div>
      <FontAwesomeIcon className={finalClassName} icon={faPlay} onClick={onClickHandler}/>
    </div>
  );
};

export default Toggle;