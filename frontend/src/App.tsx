import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

    <ToastContainer />
  </AuthProvider>
);

export default App;
