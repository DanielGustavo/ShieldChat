import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { useAuth } from '../../context/AuthContext';

import { UserProps } from '../../screens/Chat/types';

import { Container, Text } from './styles';

const User: React.FC<UserProps> = ({ username }) => {
  const { user, logout } = useAuth();

  const owner = user?.username === username;

  return (
    <Container owner={owner}>
      <Text>{username}</Text>
      {owner && (
        <TouchableOpacity onPress={logout}>
          <Feather name="log-out" size={18} />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default User;
