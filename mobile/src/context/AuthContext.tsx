import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

import tokenIsValid from '../utils/tokenIsValid';

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
  username?: string;
  id?: string;
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
  const [data, setData] = useState({} as AuthData);
  const [authenticated, setAuthenticated] = useState<boolean>(() => {
    return !!(data.token && data.user);
  });

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        'ShieldChat:token',
        'ShieldChat:user',
      ]);

      if (user[1] && token[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
    }

    loadStorageData();
  }, []);

  useEffect(() => {
    const tokenIsInvalid = tokenIsValid(data.token) === false;

    if (tokenIsInvalid) {
      setAuthenticated(false);
      return;
    }

    setAuthenticated(!!(data.token && data.user));
  }, [data]);

  const signIn = useCallback(async (credentials: SignInProps): Promise<
    void
  > => {
    const { data: response } = await api.post('/authentication', credentials);
    setData({ token: response.token, user: response.user });

    await AsyncStorage.multiSet([
      ['ShieldChat:token', response.token],
      ['ShieldChat:user', JSON.stringify(response.user)],
    ]);
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

  const logout = useCallback(async () => {
    await AsyncStorage.multiRemove(['ShieldChat:user', 'ShieldChat:token']);
    setData({} as AuthData);
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
