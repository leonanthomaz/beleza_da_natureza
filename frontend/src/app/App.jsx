import React from 'react';
import { GlobalStyles } from './sharing/styles/GlobalStyles'
import { AppRouter } from './sharing/routes/AppRoutes';

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles/>
      <AppRouter/>
    </div>
  );
}