import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} /> */}
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{height: 40, backgroundColor: 'skyblue'}} />
        <View style={{flex: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
