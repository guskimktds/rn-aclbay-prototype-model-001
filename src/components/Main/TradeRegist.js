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
  Alert,
  Dimensions
} from 'react-native';

import CustomRadioButton from '../Custom/CustomRadioButton.js';
import CustomPicker from '../Custom/CustomPicker.js';
import PriceRadioButton from '../Custom/PriceRadioButton.js';

import DefaultPreference from 'react-native-default-preference';
import base64 from 'base-64';
import CommonConf from '../CommonConf';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class TradeRegist extends Component {

  // const state = {
  //   categoryName: '',
  //   categorys: '',
  //   product:'',
  //   priceType:'',
  //   price: '',
  //   tradeTypeCodes: [
  //     { label : '팝니다', value : 'SELL' , selected : false },
  //     { label : '교환', value : 'EXCHANGE', selected : false }
  //   ]
  // };

  constructor(props) {
    super(props);

    // "tradeTypeCode": this.state.currentTradeTypeCode,
    // "tradeCategoryCode":this.state.currentTradeCategoryCode,
    // "item":this.state.item,
    // "priceTypeCode":this.state.currentPriceTypeCode,
    // "price":this.state.price

    this.state = {
      tradeCategoryCodes : [
        { label : '거주자', value : 'RESIDENT' },
        { label : '레시피', value : 'RECIPE' },
        { label : '티켓', value : 'TICKET' },
        { label : '가구', value : 'FURNITURE' },
        { label : '옷', value : 'DRESS' },
        { label : '재료', value : 'MATERIAL' },
        { label : '기타', value : 'ETC' }
      ],
      item:'',
      priceTypeCodes : [
        { label : '덩(99000벨)', value : 'MONEY' },
        { label : '마일여행권', value : 'TICKET' },
      ],
      price: '',
      tradeTypeCodes: [
        { label : '팝니다', value : 'SELL'  },
        { label : '교환', value : 'EXCHANGE' }
      ],
      currentTradeTypeCode : 'SELL',
      currentTradeCategoryCode : 'FURNITURE',
      currentPriceTypeCode : 'MONEY',
      accessToken : ''
    };
  }



  // 입력 값 Validation 처리

  // 거래등록
  _doTradeRegister = () => {

    // Validation 처리 후 정상이면 true, 비정상이면 false
    console.log("============_doTradeRegister============");

    let isValid = true; // hard coding

    /*
      "tradeTypeCode":"SELL",
      "tradeCategoryCode":"FURNITURE",
      "item":"히어로 로봇",
      "priceTypeCode":"MONEY",
      "price":10


      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json;UTF-8");
        myHeaders.append("Authorization", "Bearer 48cb1d74-057a-4893-a1af-fc568559e1f5");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"tradeTypeCode":"SELL","tradeCategoryCode":"FURNITURE","item":"히어로 로봇","priceTypeCode":"MONEY","price":10});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://54.180.77.236:8080/api/aclbay/trade", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    */



    if(isValid) {
      var url = 'http://' + CommonConf.urlHost + ':'+ CommonConf.port+'/api/aclbay/trade';

      // this.setState({
      //   isLoadingNow: true
      // });

      //3ad21e59-f95e-47c1-9369-e25bcd16153d

      const access_token = '3ad21e59-f95e-47c1-9369-e25bcd16153d';

      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json;UTF-8");
        myHeaders.append("Authorization", "Bearer "+access_token);
        myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        // "tradeTypeCode":"SELL",
        // "tradeCategoryCode":"FURNITURE",
        // "item":"히어로 로봇",
        // "priceTypeCode":"MONEY",
        // "price":10

        "tradeTypeCode": this.state.currentTradeTypeCode,
        "tradeCategoryCode":this.state.currentTradeCategoryCode,
        "item":this.state.item,
        "priceTypeCode":this.state.currentPriceTypeCode,
        "price":this.state.price
      });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


      fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      })

    }

  }

  _showInputTextErrorMsg = (type) => {
      let msg = '';
      switch (type) {
          case 'id':
              msg = '본인의 ID를 확인해 주세요'
              break;
          case 'pw':
              msg = '비밀번호를 확인해 주세요'
              break;
          default:
              break;
      }
      Alert.alert(
          '알림',
          msg,
          [
              {
                  text: '확인'
              },
          ],
      )
  }

  _checkValidInputValues = (id, pw) => {
      if (id && pw) {
      }
      else {  // 비어 있는 입력값 체크
          if (!id) {
              this._showInputTextErrorMsg('id');
              return false;
          }
          if (!pw) {
              this._showInputTextErrorMsg('pw');
              return false;
          }

      }
      return true;
  }

  // const tradeTypeCodes = [
  //   { label : '팝니다', value : 'SELL' , selected : false },
  //   { label : '교환', value : 'EXCHANGE', selected : false },
  // ];
  //
  // const priceTypeCode = [
  //   { label : '덩(99000벨)', value : 'MONEY' },
  //   { label : '마일여행권', value : 'TICKET' },
  // ];
  //
  // const tradeCategoryCode = [
  //   { label : '거주자', value : 'RESIDENT' },
  //   { label : '레시피', value : 'RECIPE' },
  //   { label : '티켓', value : 'TICKET' },
  //   { label : '가구', value : 'FURNITURE' },
  //   { label : '옷', value : 'DRESS' },
  //   { label : '재료', value : 'MATERIAL' },
  //   { label : '기타', value : 'ETC' }
  // ];
  //
  // const TradeStatusCode = [
  //   { label : '등록', value : 'REGISTRATION' },
  //   { label : '매수문의', value : 'PURCHASE_INQUIRY' },
  //   { label : '진행', value : 'INPROGRESS' },
  //   { label : '완료', value : 'COMPLETE' },
  //   { label : '취소', value : 'CANCEL' },
  // ];

  _handleTradeType = (type) => {
    console.log("_handleTradeType: "+type);
    this.setState({
      currentTradeTypeCode : type
    });
  }

  _handleTradeCategory = (category) => {
    console.log("_handleTradeCategory: "+category);
    this.setState({
      currentTradeCategoryCode : category
    });
  }

  _handlePriceTypeCode = (type) => {
    console.log("_handlePriceTypeCode: "+type);
    this.setState({
      currentPriceTypeCode : type
    });
  }

  //access Token 을 로컬에서 얻는다. 없으면 로그인으로 이동
  componentDidMount() {

    //TODO : 로컬에 토큰이 있는지 확인하고 local 토큰정보를 읽어온다.
    this._getLocalToken();
  }


  _getLocalToken() {
    console.log("로컬에서 토큰이 있는지 확인해본다.");
    const _this = this;
    DefaultPreference.get(CommonConf.PREF_KEY_LOGIN_TOKEN)
    .then(function (value) {
      console.log(value);
      if(value !== null){
        //TODO: 토큰이 있으면 true
        _this.setState({
          accessToken: value
        })
      }else{
        //TODO: false (=디폴트 값)
        console.log(_this.state.isToken);
        //go logout
        this.props.navigation.navigate('SignIn');
      }
    })
  }

  render() {

    console.log("========== TradeResit ============ : "+this.state.currentTradeTypeCode);
    //console.log("========== TradeResit ============ : "+this.state.tradeTypeCodes[1].selected);
    const { tradeTypeCodes } = this.state.tradeTypeCodes;
    // const tradeTypeCodes = [{
    //   key : 'sell',
    //   text : '팝니다'
    // },
    // {
    //   key : 'exchange',
    //   text : '교환'
    // }];

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
    console.log("=========== TradeResit render method call ==========");


    return (
      <View style={styles.container}>

        <CustomRadioButton tradeTypeCodes={this.state.tradeTypeCodes} selectTradeTypeCode={this._handleTradeType} />
        <CustomPicker tradeCategoryCodes={this.state.tradeCategoryCodes} selectTradeCategoryCode={this._handleTradeCategory} />
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../../images/icons8-ingredients-48.png')}
            />
          <TextInput style={styles.inputs}
              placeholder="판매/교환 물품"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(item) => this.setState({item})}/>
        </View>
        <PriceRadioButton priceTypeCodes={this.state.priceTypeCodes} selectPriceTypeCode={this._handlePriceTypeCode} />

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require('../../images/icons8-art-prices-48.png')}
            />
          <TextInput style={styles.inputs}
              placeholder="물품 가격 입력"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(island) => this.setState({island})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.registButton]} onPress={() => this._doTradeRegister()}>
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
      marginBottom:30,
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
