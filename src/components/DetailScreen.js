import React from 'react';
import { Button, View, Text } from 'react-native';

export default class DetailScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Details',
  // };

  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    const { params } = navigation.state;
    return {
      //title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    //const { navigation } = this.props;
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    // const itemId = navigation.getParam('itemId', 'NO-ID');
    // const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Update the title"
            onPress={() =>
              this.props.navigation.setParams({ otherParam: 'Updated!' })}
          />
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
}

//onPress={() => this.props.navigation.navigate('Details')}
