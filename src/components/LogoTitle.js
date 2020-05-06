import React from 'react';
import { Button, Image, View, Text } from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../images/icons8-react-native-50.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
