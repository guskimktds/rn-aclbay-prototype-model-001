import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import DefaultPreference from 'react-native-default-preference'; //토큰저장, 사용
import base64 from 'base-64';
import CommonConf from '../CommonConf';


export default class SignIn extends Component {

  state = {
    //isLoadingNow : false,
    id : '',
    password: '',
    loginToken: '',
    isToken: false,
  };

  // static navigationOptions = {
  //     headerShown: false,
  //     title: "로그인",
  //     headerStyle: {
  //         backgroundColor: '#4baec5',
  //     },
  //     headerTintColor: '#fff',
  //     headerTitleStyle: {
  //         fontWeight: 'bold',
  //         color: '#fff'
  //     },
  // };

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

  //토큰이 존재하여 기존 토튼을 얻어서 로그인 수행
  _doLoginWithToken = () => {
      console.log("================= _doLoginWithToken start====================");
      var url = 'http://' + CommonConf.urlHost + ':'+ CommonConf.port+'/api/access/user';
      //var url = 'http://54.180.77.236:8080/api/access/user';
      //let tokenValue = 'fba278e1-30d8-471f-90fe-5d2b0486b048';
      let tokenValue = this.state.loginToken;
      console.log(url+", token: "+tokenValue);

      fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenValue,
          }
      }).then(response => response.json()).then(json => {
          console.log(json);
          if(json.error == 'invalid_token' ){
            // ACL Bay application Main 화면으로 이동
            //this.props.navigation.navigate('App');
            Alert.alert("토근정보가 유효하지 않습니다.");
            console.log("토근정보가 유효하지 않습니다.");
            this._createToken();
          }else {
            // this.setState({
            //     isLoadingNow: false
            // });
            console.log("json.loginId:"+json.loginId+", this.state.id: "+this.state.id);
            if(json.loginId == this.state.id){
              // ACL Bay application Main 화면으로 이동
              this.props.navigation.navigate('App');
            }else{
              // 토큰정보에 해당하는 ID가 아니므로 오류
              Alert.alert("로그인 사용자 ID 정보가 유효하지 않습니다.");
            }

          }

      }).catch(error => {
          //Alert.alert("서버 통신 상태가 원활하지 않습니다. 잠시 후 다시 시도해 주세요.");
          console.log(error);
      });
      console.log("================= _doLoginWithToken end====================");
  }

  _createToken(){
    console.log("================= _createToken start====================");
    const basicAuthStr = base64.encode(CommonConf.authUsername+":"+CommonConf.authPassword);

    var requestOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic '+basicAuthStr,
        },
        body: 'grant_type=password&username=' +this.state.id+ '&password=' +this.state.password
      };

      fetch("http://54.180.77.236:8080/oauth/token", requestOptions)
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData);
          //TODO: 로컬에 토큰을 저장한다.
          console.log(responseData.access_token);
          DefaultPreference.set(CommonConf.PREF_KEY_LOGIN_TOKEN, responseData.access_token)
          .then(function(){
            console.log('login token saved.');
            //Main 화면으로 전환됨
          }).then(()=>{this.props.navigation.navigate('App');})


        })
        .catch(error => {
            Alert.alert("서버 통신 상태가 원활하지 않습니다. 잠시 후 다시 시도해 주세요. ");
            console.log(error);
            this.setState({
                isLoadingNow: false
            })
        });
      console.log("================= _createToken end====================");
  }

  onClickListener = (viewId) => {
      //Alert.alert("Alert", "Button pressed "+viewId+"id: "+this.state.id+", pw: "+this.state.password);
      if(viewId == "restore_password"){
        // 패스워드 재설정 화면으로 이동
        Alert.alert("restore_password");
        //this.props.navigation.navigate('ResetPassword');
      }else if(viewId == "register"){
        // 회원가입 화면으로 이동
        this._goRegister();
      }else if(viewId == "login"){
        console.log(this.state.isToken);
        if(!this.state.isToken){
          // TODO : 토큰이 없는 경우(isToken : true)
          this._createToken();
        }else{
          // TODO : 토큰이 있는 경우(isToken : true)
          this._doLoginWithToken();
        }
      }
    }

  // 회원가입 화면 이동
  _goRegister = () => {
      this.props.navigation.navigate('SignUp');
  }

  // componentWillMount(){
  //   console.log("componentWillMount");
  // }

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
          isToken: true,
          loginToken: value
        })
      }else{
        //TODO: false (=디폴트 값)
        console.log(_this.state.isToken);
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>ACL Bay</Text>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Id 를 입력하세요"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(id) => this.setState({id})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text style={{textDecorationLine: 'underline'}}>아직 계정이 없으신가요? 회원가입</Text>
        </TouchableHighlight>
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  titleContainer: {
    borderBottomColor: '#04B486',
    backgroundColor: '#04B486',
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
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
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
