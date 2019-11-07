import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

function CoinItem(props) {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 50, height: 50, margin: 5}}
        source={{uri: props.iconUri}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View>
          <Text style={[styles.text, {flex: 1, fontSize: 20, marginTop: 5}]}>
            {props.name || 'Name'}
          </Text>
          <Text style={[styles.text, {flex: 1, color: 'darkgrey'}]}>
            {'Volume: ' + props.volume || 0}
          </Text>
          <Text style={[styles.text, {flex: 1}]}>
            {'Price: ' + props.price || 0}
          </Text>
        </View>
        <Text style={[styles.text]}>{'#' + props.rank || 'Rank'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  text: {
    color: 'black',
  },
  rankText: {
    fontSize: 25,
  },
});

export default CoinItem;
