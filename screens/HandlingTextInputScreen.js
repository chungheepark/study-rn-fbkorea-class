import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  handleChange(event) {
    this.setState({text: event});
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={text => this.handleChange(text)}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text
            .split(' ')
            .map(word => word && '피자모양 ')
            .join('')}
        </Text>
      </View>
    );
  }
}
