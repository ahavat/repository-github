/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Router } from 'express';

import Dashboard from '../pages/Dashboard/index';
import Repository from '../pages/Repository/index';

const Routes: React.FC = () => (
  <>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </>
);
export default Routes;
