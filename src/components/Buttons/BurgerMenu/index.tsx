import React, { useState, MouseEvent } from 'react';

import styles from './style.module.css'

type BurgerMenuProps = {
  onClick: (value: boolean) => void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(true)

  const onClickHandler = (event: MouseEvent<HTMLInputElement>) => onClick(event.currentTarget.checked)
  const onChangeHandler = () => setIsChecked(!isChecked)

  return (
    <React.Fragment>
      <input type="checkbox"
             id={styles.menu}
             checked={isChecked}
             onClick={onClickHandler}
             onChange={onChangeHandler}
             hidden={true}/>
      <label htmlFor={styles.menu} className={styles.burgerIcon}>
        <div className={styles.burger}/>
      </label>
    </React.Fragment>
  )
};

export default BurgerMenu;