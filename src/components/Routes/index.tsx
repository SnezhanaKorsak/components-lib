import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ButtonsPage from '../Buttons';
import PropertiesPage from '../Properties';

import { Path } from '../../constants';

const RoutesSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<ButtonsPage/>}/>
      <Route path={Path.Buttons} element={<ButtonsPage/>}/>
      <Route path={Path.Properties} element={<PropertiesPage/>}/>
    </Routes>
  )
};

export default RoutesSwitch;

//css properties