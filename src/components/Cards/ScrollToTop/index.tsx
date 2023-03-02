import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';

const ScrollToTop = () => {
  const scrolledElement = useRef<HTMLDivElement | null>(null)

  const scrollToUp = () => {
    //скролит в верх страницы (экрана)
  /*  window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })*/

    //https://bosctechlabs.com/scroll-to-an-element-in-react/

    if(scrolledElement.current) {
      scrolledElement.current.scrollIntoView({behavior:"smooth"})
    }

  }

  return (
    <div className={styles.wrapper}>
      <h2>Scroll to top</h2>
      <div className={styles.container} >
        <h5 ref={scrolledElement}>Lorem ipsum dolor</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consequatur ducimus maiores</p>

        <h6 className={styles.subtitle}>Lorem ipsum.</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugit minima tempore unde
          voluptatem. Laboriosam perferendis quis ratione voluptas voluptate?</p>

        <h6 className={styles.subtitle}>Lorem ipsum.</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugit minima tempore unde
          voluptatem. Laboriosam perferendis quis ratione voluptas voluptate?</p>


        <h6 className={styles.subtitle}>Lorem ipsum.</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugit minima tempore unde
          voluptatem. Laboriosam perferendis quis ratione voluptas voluptate?</p>


        <h6 className={styles.subtitle}>Lorem ipsum.</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugit minima tempore unde
          voluptatem. Laboriosam perferendis quis ratione voluptas voluptate?</p>

        <h6 className={styles.subtitle}>Lorem ipsum.</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugit minima tempore unde
          voluptatem. Laboriosam perferendis quis ratione voluptas voluptate?</p>

        <h6 className={styles.subtitle}>Lorem ipsum.</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem fugit minima tempore unde
          voluptatem. Laboriosam perferendis quis ratione voluptas voluptate?</p>

        <div className={styles.backTop} onClick={scrollToUp}>
          <FontAwesomeIcon icon={faArrowUp}/>
        </div>

      </div>
    </div>
  );
};

export default ScrollToTop;