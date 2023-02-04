import React, { MouseEvent, useEffect, useRef, useState } from 'react';

import styles from './style.module.scss'

const Interactive3DCardEffect = () => {
  const elementRef = useRef<HTMLInputElement>(null)

  const [size, setSize] = useState({ width: 0, height: 0 })
  const [transform, setTransform] = useState('')

  useEffect(() => {
    const { width, height } = elementRef?.current?.getBoundingClientRect()!
    setSize({ width, height })
  }, [])


  const onMouseMoveHandler = (event: MouseEvent<HTMLDivElement>) => {
    const { offsetX, offsetY } = event.nativeEvent
    let xPos = (offsetX / size.width) - 0.5;
    let yPos = (offsetY / size.height) - 0.5;

    let yAngle = `${xPos * 5}deg`;
    let xAngle = `${yPos * 5}deg`;

    setTransform(`perspective(200px) rotateY(${yAngle}) rotateX(${xAngle})`)
  }

  const onMouseLeaveHandler = () => setTransform('')

  return (
    <div className={styles.wrapper}>
      <h2>Interactive 3D Card Effect</h2>
      <div className={styles.container} ref={elementRef} onMouseMove={onMouseMoveHandler}
           onMouseLeave={onMouseLeaveHandler}>
        <div className={styles.card} style={{ transform }}>
          Text
        </div>
      </div>
    </div>
  );
};

export default Interactive3DCardEffect;