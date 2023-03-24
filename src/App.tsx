import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import './globalStyles.scss';
import AppProvider from './contexts/AppProvider';

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter basename='megasena'>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
