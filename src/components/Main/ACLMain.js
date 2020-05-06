import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

export default class ACLMain extends Component {

  render() {
    return (
      <View>
        <View>
          <Text>
            ACLMain 화면
          </Text>
        </View>
        <TouchableOpacity
          style={styles.settingBtn}
          onPress={() => this.props.navigation.navigate("SignIn")}
          activeOpacity={0.7}
        >
          <Text>SignIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingBtn}
          onPress={() => this.props.navigation.navigate("ProductRegist")}
          activeOpacity={0.7}
        >
          <Text>거래등록</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
