import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function TopBar(props) {
  return (
    <View style={styles.container}>
      <Text>Left</Text>
      <View>
        <Text style={{fontSize: 20}}>{props.title || 'Title'}</Text>
        <Text style={{fontSize: 10, textAlign: 'center'}}>
          {props.refreshDate || '-'}
        </Text>
      </View>
      <Text>Right</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopBar;
