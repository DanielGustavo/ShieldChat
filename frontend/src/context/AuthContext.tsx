import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

import api from '../services/api';

interface SignInProps {
  username: string;
  password: string;
}

interface SignUpProps {
  username: string;
  password: string;
  password_confirmation: string;
}

interface User {
  username: string;
  id: string;
}

interface AuthProps {
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
  logout: () => void;
  token: string;
  user: User;
  authenticated: boolean;
}

interface AuthData {
  token: string;
  user: User;
}

const AuthContext = createContext({} as AuthProps);

export function useAuth(): AuthProps {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = window.localStorage.getItem('ShieldChat:token');
    const user = window.localStorage.getItem('ShieldChat:user');

    if (user && token) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });
  const [authenticated, setAuthenticated] = useState<boolean>(() => {
    return !!(data.token && data.user);
  });

  useEffect(() => {
    setAuthenticated(!!(data.token && data.user));
  }, [data]);

  const signIn = useCallback(async (credentials: SignInProps): Promise<
    void
  > => {
    const { data: response } = await api.post('/authentication', credentials);

    setData({ token: response.token, user: response.user });

    window.localStorage.setItem('ShieldChat:token', response.token);
    window.localStorage.setItem(
      'ShieldChat:user',
      JSON.stringify(response.user)
    );
  }, []);

  const signUp = useCallback(
    async (credentials: SignUpProps): Promise<void> => {
      await api.post('/users', credentials);

      signIn({
        username: credentials.username,
        password: credentials.password,
      });
    },
    [signIn]
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem('ShieldChat:user');
    window.localStorage.removeItem('ShieldChat:token');
    window.location.href = '/';
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        logout,
        token: data.token,
        user: data.user,
        authenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
