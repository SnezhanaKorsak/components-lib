import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ButtonsPage from '../Buttons';
import PropertiesPage from '../Properties';
import SpinnersPage from '../Spinners';
import GradientPage from '../GradientPage';
import CardsPage from '../Cards';
import OtherPage from '../Other';

import { Path } from '../../constants';

const RoutesSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<ButtonsPage/>}/>
      <Route path={Path.Buttons} element={<ButtonsPage/>}/>
      <Route path={Path.Spinners} element={<SpinnersPage/>}/>
      <Route path={Path.Cards} element={<CardsPage/>}/>
      <Route path={Path.Properties} element={<PropertiesPage/>}/>
      <Route path={Path.Gradients} element={<GradientPage/>}/>
      <Route path={Path.Other} element={<OtherPage/>}/>
    </Routes>
  )
};

export default RoutesSwitch;

//css properties