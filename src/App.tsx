import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import './globalStyles.scss';
import AppProvider from './contexts/AppProvider';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter basename={import.meta.env.VITE_BASENAME}>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
};
