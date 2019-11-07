import React, {Component} from 'react';
import {Image} from 'react-native';

const pic = {
  uri:
    'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg',
};

export default class FirstPropsScreen extends Component {
  render() {
    return (
      <Image
        source={require('../images/flower.jpg')}
        style={{width: '100%', height: 110}}
      />
    );
  }
}
