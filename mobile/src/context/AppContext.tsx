import React from 'react';

import { AuthProvider } from './AuthContext';
import { ChatProvider } from './ChatContext';

export const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ChatProvider>{children}</ChatProvider>
  </AuthProvider>
);
