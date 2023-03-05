import React from 'react';

import styles from './style.module.scss'

//https://lokesh-coder.github.io/blobs.app/?e=6&gw=6&se=772854&c=d1d8e0&o=0

const Blob = () => {
  return (
    <div className={styles.blob}>
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
           width="100%" id="blobSvg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(254, 0, 242)' }}></stop>
            <stop offset="100%" style={{ stopColor: 'rgb(251, 2, 128)' }}></stop>
          </linearGradient>
        </defs>
        <path fill="url(#gradient)">
          <animate attributeName="d"
                   dur="10000ms"
                   repeatCount="indefinite"
                   values="M424,311.5Q419,373,369,417.5Q319,462,266.5,411Q214,360,159,358Q104,356,69.5,303Q35,
                       250,66,194.5Q97,139,142,97Q187,55,252.5,47.5Q318,40,331.5,110.5Q345,181,387,215.5Q429,
                       250,424,311.5Z;

                       M405,292Q366,334,346,408.5Q326,483,263,444Q200,405,182,359Q164,313,143,281.5Q122,250,116.5,
                       199.5Q111,149,153.5,116Q196,83,259.5,54.5Q323,26,338,100.5Q353,175,398.5,212.5Q444,250,405,292Z;

                       M393,285.5Q348,321,316,338Q284,355,250,355.5Q216,356,162.5,354.5Q109,353,112,301.5Q115,250,
                       92.5,184.5Q70,119,132.5,99.5Q195,80,241.5,106Q288,132,353.5,129.5Q419,127,428.5,188.5Q438,250,393,285.5Z;

                       M436.5,317.5Q436,385,378,425.5Q320,466,266,416.5Q212,367,174.5,349.5Q137,332,128,291Q119,250,121,
                       204Q123,158,165.5,139.5Q208,121,248,127Q288,133,340.5,139.5Q393,146,415,198Q437,250,436.5,317.5Z;

                       M439,319.5Q441,389,373.5,405Q306,421,261,387.5Q216,354,176,343.5Q136,333,93,291.5Q50,250,73,
                       194Q96,138,151.5,128Q207,118,257.5,94.5Q308,71,355.5,105Q403,139,420,194.5Q437,250,439,319.5Z;

                       M424,311.5Q419,373,369,417.5Q319,462,266.5,411Q214,360,159,358Q104,356,69.5,303Q35,
                       250,66,194.5Q97,139,142,97Q187,55,252.5,47.5Q318,40,331.5,110.5Q345,181,387,215.5Q429,
                       250,424,311.5Z;
                       "
          >
          </animate>
        </path>
      </svg>
    </div>
  )
};

const AnimatedBlob = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Animated Blob</h2>

      <div className={styles.container}>
       <Blob/>
       <Blob/>
      </div>

    </div>
  );
};

export default AnimatedBlob;