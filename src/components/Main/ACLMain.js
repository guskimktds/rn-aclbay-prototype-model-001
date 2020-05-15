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
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            ACLMain 화면
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.registButton]}
          onPress={() => this.props.navigation.navigate("TradeRegist")}
          activeOpacity={0.7}
        >
          <Text style={styles.registText}>거래등록</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.listButton]}
          onPress={() => this.props.navigation.navigate("TradeList")}
          activeOpacity={0.7}
        >
          <Text style={styles.registText}>거래목록</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.signInButton]}
          onPress={() => this.props.navigation.navigate("SignIn")}
          activeOpacity={0.7}
        >
          <Text style={styles.registText}>SignIn</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  titleText: {
    color: '#04B486',
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signInButton: {
    backgroundColor: "#00b5ec",
  },
  registButton: {
    backgroundColor: "#04B404",
  },
  listButton: {
    backgroundColor: "#B45F04",
  },
  registText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
