import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import FunctionalCount from './screens/FunctionalCount';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <FunctionalCount />
      </SafeAreaView>
    </>
  );
};

export default App;
