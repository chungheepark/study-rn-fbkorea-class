import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(prev => ({isShowingText: !prev.isShowingText}));
    }, 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text>{this.props.text}</Text>;
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'yellow'}}>
        <Blink text="hi" />
      </View>
    );
  }
}

export default BlinkApp;
