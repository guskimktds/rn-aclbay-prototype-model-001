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


export default class TradeRow extends Component {

  constructor(props){
    super(props);
    this.state = {
      trade: props.tradeProps
    };
  }

  //console.log(key + ", " + trade.id + ", " + trade.item + ", " + trade.seller.id+ ", " + trade.seller.detail.islandName);

  /*
  {   "id": "TRD000000000010",
      "tradeStatusCode": "REGISTRATION",
      "tradeTypeCode": "SELL",
      "tradeCategoryCode": "FURNITURE",
      "item": "히어로 로봇3",
      "priceTypeCode": "MONEY",
      "price": 20,
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
  */

  render() {

    const trade = this.state.trade;

    return (
        <View style={styles.container}>

          <View style={styles.leftContainer}>

            <View style={styles.topContainer}>

              <View style={styles.smalTagButton}>
                <Text style={styles.tagText}>{trade.tradeTypeCode}</Text>
              </View>
              <View style={styles.tagButton}>
                <Text style={styles.tagText}>{trade.tradeCategoryCode}</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.largeTagButton}>
                <Text style={styles.tagText}>{trade.tradeStatusCode}</Text>
              </View>
              <View style={styles.dateText}>
                <Text>{trade.cretDt}</Text>
              </View>
            </View>

          </View>

          <View style={styles.rightContainer}>
            <View style={styles.topContainer}>

              <View style={styles.item}>
                <Text style={styles.itemText}>{trade.item}</Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.price}>
                <Text style={styles.priceText}>{trade.price}{(trade.priceTypeCode==="MONEY")?" (덩)":""}</Text>
              </View>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      borderBottomWidth: 1,
      width:390,
      height:100,
      marginTop: 10,
      marginLeft: 10,
      flexDirection: 'row',
      alignItems:'center'
  },
  leftContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  rightContainer: {
    flex: 1
  },
  topContainer: {
    flexDirection: 'row',
  },
  bottomContainer: {
    flexDirection: 'column',
  },
  smalTagButton: {
    height:20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 5,
    width:40,
    borderRadius:5,
    backgroundColor: "#FF4000",
  },
  tagButton: {
    height:20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 5,
    width:70,
    borderRadius:5,
    backgroundColor: "#00b5ec",
  },
  largeTagButton: {
    height:20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 5,
    width:100,
    borderRadius:5,
    backgroundColor: "#04B404",
  },
  tagText: {
    fontSize: 10
  },
  itemText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
    alignItems: 'center'
  },
  priceText: {
    fontSize: 15,
    fontWeight: "300",
    alignItems: 'center'
  }

});
