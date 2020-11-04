import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import SignUp from './screens/SignUp';

const App: React.FC = () => {
  const [loadedFonts] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!loadedFonts) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar hidden />

      <SafeAreaView style={{ flex: 1, backgroundColor: '#24292E' }}>
        <SignUp />
      </SafeAreaView>
    </>
  );
};

export default App;
