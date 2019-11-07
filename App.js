import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import NetworkScreen from './screens/NetworkScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NetworkScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
