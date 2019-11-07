import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello{this.props.name}!</Text>
      </View>
    );
  }
}

class Yum extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hi{this.props.yum}!</Text>
      </View>
    );
  }
}

export class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 20}}>
        <Greeting name="a" />
        <Greeting name="suyeon" />
        <Greeting name="yum   yum" />
      </View>
    );
  }
}

export class LotsOfYum extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 20}}>
        <Yum yum="a" />
      </View>
    );
  }
}
