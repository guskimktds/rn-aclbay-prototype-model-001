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

import SearchItems from './List/SearchItems'
import TradeRow from './List/TradeRow'

export default class TradeList extends Component {

  // state = {
  //   categoryName: '',
  //   categorys: '',
  //   product:'',
  //   priceType:'',
  //   price: ''
  // }

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      trades: [
        {   "id": "TRD000000000009",
            "tradeStatusCode": "REGISTRATION",
            "tradeTypeCode": "SELL",
            "tradeCategoryCode": "FURNITURE",
            "item": "히어로 로봇2",
            "priceTypeCode": "MONEY",
            "price": 30,
            "exchangeItem": null,
            "invitePass": null,
            "buyer": null,
            "seller": {
                "id": "USR0000000000049",
                "detail": {
                    "islandName": "울릉도",
                    "characterName": "사기꾼너구리"
                }
            },
            "cretDt": "2020-05-08T05:56:51.509"
        },
        {   "id": "TRD000000000010",
            "tradeStatusCode": "REGISTRATION",
            "tradeTypeCode": "SELL",
            "tradeCategoryCode": "FURNITURE",
            "item": "히어로 로봇3",
            "priceTypeCode": "MONEY",
            "price": 20,
            "exchangeItem": null,
            "invitePass": "AT7FR",
            "buyer": {
                "id": "USR0000000000048",
                "detail": {
                    "islandName": "푸처핸섬",
                    "characterName": "빠더"
                }
            },
            "seller": {
                "id": "USR0000000000049",
                "detail": {
                    "islandName": "울릉도",
                    "characterName": "사기꾼너구리"
                }
            },
            "cretDt": "2020-05-08T05:56:51.509"
        },
      ],
      tradeListArrary: []
    };

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this._goDetail = this._goDetail.bind(this);
  }



  // 입력 값 Validation 처리

  // 거래등록
  _doTradeList = () => {

    // Validation 처리 후 정상이면 true, 비정상이면 false
    let isValid = true; // hard coding
    if(isValid) {
      var url = 'backend uri 로 변경';

      this.setState({
        isLoadingNow: true
      });

      fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      })

    }

  }

  // _getTradeItems = () => {
  //   const trades = this.state.trades;
  //
  //   for(var key in trades){
  //     var trade = trades[key];
  //     console.log(key + ", " + trade.id + ", " + trade.item + ", " + trade.seller.id+ ", " + trade.seller.detail.islandName);
  //   }
  // }

  _goDetail = (res) => {
    //Alert.alert(res.id);
    // let trade = res.id;
    // console.log(trade);
    this.props.navigation.navigate("TradeDetail", {
                otherParam: res
              });

  }


  // _goItemDtlList = timeData => {
  //   this.props.navigation.navigate("ItemDtlList", { timeData: timeData });
  // };
  //
  render() {

    //this._getTradeItems();

    const trades = this.state.trades;

    return (

      <View style={styles.container}>
        <Text>거래목록</Text>
        <SearchItems />
        {
          trades.map(res => {
            return (
              <TouchableOpacity onPress={this._goDetail.bind(this, res)}>
                <TradeRow tradeProps={res} />
              </TouchableOpacity>
            );
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
