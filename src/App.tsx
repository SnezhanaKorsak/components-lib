import React from 'react';

import Menu from './components/Menu';

import styles from './App.module.scss';
import RoutesSwitch from './components/Routes';

function App() {
  return (
    <div className={styles.appWrapper}>
      <Menu/>
      <RoutesSwitch/>
    </div>
  );
}

export default App;
