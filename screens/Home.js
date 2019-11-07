import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import CoinView from './CoinView';
import TopBar from './TopBar';

const Home: props => React$Node = props => {
  const [refreshDate, setRefreshDate] = useState('-');

  const setGlobalRefreshDate = useCallback(
    date => {
      if (props.navigation) {
        props.navigation.setParams({refreshDate: date});
      }
      setRefreshDate(date);
    },
    [props.navigation],
  );

  return (
    <View style={styles.container}>
      <CoinView
        navigation={props.navigation}
        style={styles.coinView}
        setRefreshDate={setGlobalRefreshDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: getStatusBarHeight(),
    backgroundColor: '#c2185B',
  },
  coinView: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
});

export default Home;
