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

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class TradeDetail extends Component {

  // state = {
  //   trade : this.props.route.params
  // }
  constructor() {
    super();
  }

  render() {


    const { otherParam } = this.props.navigation.state.params;

    //console.log("tradeId : "+tradeId);
    console.log("otherParam : "+otherParam.item);
    const trade = otherParam;
    console.log("trade : "+trade.item);
    return (
      <View style={styles.container}>
        <View style={styles.topTagContainer}>
          <View style={styles.tagButton}>
            <Text style={styles.tagText}>구매신청</Text>
          </View>
          <View style={styles.tagButton}>
            <Text style={styles.tagText}>팝니다</Text>
          </View>
          <View style={styles.tagButton}>
            <Text style={styles.tagText}>가구</Text>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.itemTitleBox}>
              <Text style={styles.subTitleText}>판매물품</Text>
            </View>
            <View style={styles.priceTitleBox}>
              <Text style={styles.subTitleText}>판매가격</Text>
            </View>
            <View style={styles.smallTitleBox}>
              <Text style={styles.subTitleText}>판매자</Text>
            </View>
            <View style={styles.smallTitleBox}>
              <Text style={styles.subTitleText}>구매자</Text>
            </View>
            <View style={styles.priceTitleBox}>
              <Text style={styles.subTitleText}>섬비밀번호</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.itemTextBox}>
              <Text style={styles.itemText}>{trade.item}</Text>
            </View>
            <View style={styles.priceTextBox}>
              <Text style={styles.itemText}>{trade.price}</Text>
            </View>
            <View style={styles.smallTextBox}>
              <Text style={styles.itemText}>{trade.seller.detail.islandName +" | "+trade.seller.detail.characterName}</Text>
            </View>
            <View style={styles.smallTextBox}>
              {(trade.buyer !== null)?
              (<Text style={styles.itemText}>{trade.buyer.detail.islandName +" | "+trade.buyer.detail.characterName}</Text>)
              :(<Text style={styles.itemText}></Text>)
              }
            </View>
            <View style={styles.priceTextBox}>
              <Text style={styles.itemText}>{trade.invitePass}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.approveContainer}>
            <Text>섬비밀번호 와 수락 버튼 표시</Text>
          </View>
          <View>
            <Text>거절 버튼</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01DFD7'
  },
  topTagContainer:{
    flexDirection: "row",
  },
  tagButton: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    marginRight:5,
    marginLeft:5,
    width:110,
    borderRadius:23,
    backgroundColor: "#2E2EFE",
  },
  tagText:{
    fontSize: 16,
    color: 'white',
    fontWeight: "700"
  },
  middleContainer:{
    flexDirection: "row",
    borderWidth: 0,
    width: width - 60,
},
  leftContainer:{
    flexDirection: "column",
    flex: 1,
    borderWidth: 0,
  },
  itemTitleBox:{
    borderRadius:1,
    width:110,
    height:120,
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  priceTitleBox:{
    borderRadius:1,
    width:110,
    height:30,
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  smallTitleBox:{
    borderRadius:1,
    width:110,
    height:30,
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  subTitleText:{
    fontSize: 16,
  },
  rightContainer:{
    flexDirection: "column",
    borderWidth: 0,
    flex: 3
  },
  itemTextBox:{
    borderBottomColor: '#00FF00',
    backgroundColor: '#2EFE2E',
    borderRadius:1,
    borderBottomWidth: 1,
    width:250,
    height:120,
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  priceTextBox:{
    borderBottomColor: '#00FF00',
    backgroundColor: '#2EFE2E',
    borderRadius:1,
    borderBottomWidth: 1,
    width:250,
    height:30,
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  smallTextBox:{
    borderBottomColor: '#00FF00',
    backgroundColor: '#2EFE2E',
    borderRadius:1,
    borderBottomWidth: 1,
    width:200,
    height:30,
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  itemText:{
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "auto"
  },
  bottomContainer:{
    flexDirection: "column"
  },
  subContainer: {
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
});
