import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class ClassScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {count: 0};
  }

  onPress = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <View style={styles}>
        <Text>{this.state.count}</Text>
        <Button onPress={this.onPress} title={'CountUp'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
