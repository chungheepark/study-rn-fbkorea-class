import React, {Component} from 'react';
import {
  Alert,
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  AppRegistry,
  Button,
  StyleSheet,
  View,
} from 'react-native';

export default class Touchables extends Component {
  onPressButton() {
    Alert.alert('you');
  }

  onLongPressButton() {
    Alert.alert('ddddd');
  }

  render() {
    return (
      <>
        <TouchableHighlight
          onPress={this.onPressButton}
          onLongPress={this.onLongPressButton}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHi</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this.onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOp</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={this.onPressButton}
          underlayColor="white"
          background={
            Platform.os === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : ''
          }>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
          onPress={this.onPressButton}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  buttonText: {
    padding: 20,
    color: 'white',
  },
});
