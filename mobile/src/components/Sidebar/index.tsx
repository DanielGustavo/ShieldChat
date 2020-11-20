import React from 'react';
import { FlatList } from 'react-native';

import User from '../User';

import { Container } from './styles';

import { useChat } from '../../context/ChatContext';

const Sidebar: React.FC = () => {
  const { users } = useChat();

  return (
    <Container>
      <FlatList
        data={users}
        keyExtractor={(item, index) => `${item.username}${index}`}
        renderItem={({ item }) => <User {...item} />}
      />
    </Container>
  );
};

export default Sidebar;
