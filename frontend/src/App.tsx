import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
