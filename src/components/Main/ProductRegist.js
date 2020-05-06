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

import CustomRadioButton from '../Custom/CustomRadioButton.js';
import CustomPicker from '../Custom/CustomPicker.js';
import PriceRadioButton from '../Custom/PriceRadioButton.js';

export default class ProductRegist extends Component {

  state = {
    categoryName: '',
    categorys: '',
    product:'',
    priceType:'',
    price: ''
  }

  // 입력 값 Validation 처리

  // 거래등록
  _doProductRegister = () => {

    // Validation 처리 후 정상이면 true, 비정상이면 false
    let isValid = true; // hard coding
    if(isValid) {
      var url = 'backend uri 로 변경';

      this.setState({
        isLoadingNow: true
      });

      fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      })

    }

  }

  render() {

    //const { tradeTypeCodes } = this.state.tradeTypes;
    const tradeTypeCodes = [{
      key : 'sell',
      text : '팝니다'
    },
    {
      key : 'exchange',
      text : '교환'
    }];

    // const tradeCategoryCodes = [{
    //     value : 'house',
    //     label : '집'
    //   },
    //   {
    //     value : 'tree',
    //     label : '나무'
    //   },
    //   {
    //     value : 'shovel',
    //     label : '삽'
    //   }
    // ];

    return (
      <View style={styles.container}>

        <CustomRadioButton PROP={tradeTypeCodes} />
        <CustomPicker />
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../../images/icons8-ingredients-48.png')}
            />
          <TextInput style={styles.inputs}
              placeholder="판매/교환 물품"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(island) => this.setState({island})}/>
        </View>
        <PriceRadioButton />

        <TouchableHighlight style={[styles.buttonContainer, styles.registButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>등록하기</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.cancelButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>취소</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01DFD7',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
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
  registButton: {
    backgroundColor: "#0040FF",
  },
  cancelButton: {
    backgroundColor: "#585858"
  },
  signUpText: {
    color: 'white',
  }
});
