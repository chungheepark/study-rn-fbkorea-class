import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const data = [
  {key: 'Devin'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'choong'},
  {key: 'eskim'},
  {key: 'mtpark'},
];

export default class ListViewScreen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
