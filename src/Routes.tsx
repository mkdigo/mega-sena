import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Switch>
  );
};

export default Routes;
