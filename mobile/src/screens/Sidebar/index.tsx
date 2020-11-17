import React, { useState } from 'react';
import { FlatList } from 'react-native';
import GesturesRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';

import User, { UserProps } from '../../components/User';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  const [users, setUsers] = useState([
    { username: 'Daniel' },
    { username: 'User1' },
    { username: 'User2' },
  ] as UserProps[]);

  const { goBack } = useNavigation();

  return (
    <GesturesRecognizer style={{ flex: 1 }} onSwipeRight={() => goBack()}>
      <Container>
        <FlatList
          data={users}
          keyExtractor={(item, index) => `${item.username}${index}`}
          renderItem={({ item }) => <User {...item} />}
        />
      </Container>
    </GesturesRecognizer>
  );
};

export default Sidebar;
