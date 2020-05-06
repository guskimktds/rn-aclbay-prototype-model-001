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

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    state = {
      id : '',
      password: '',
    }
  }

  // onClickListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
  // }

  static navigationOptions = {
      headerShown: false,
      title: "로그인",
      headerStyle: {
          backgroundColor: '#4baec5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff'
      },
  };

  // 회원가입 화면 이동
  _goRegister = () => {
      this.props.navigation.navigate('SignUp')
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

  //로그인유지 시
  _doLoginWithToken = (token) => {
      this.setState({
          isLoadingNow: true
      })

      //로그인 세션 토큰요청 REST API 호출

      // var url = 'http://' + CommonConf.urlHost + ':8088/ss/api/loginWithToken';
      //
      // fetch(url, {
      //     method: 'POST',
      //     headers: {
      //         Accept: 'application/json',
      //         'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //         "login_token": token
      //     }),
      // }).then(response => response.json()).then(json => {
      //     console.log(json);
      //
      //     if (json.resCode != 200) {
      //         Alert.alert(json.resMsg);
      //
      //         // 로그인 토큰 저장
      //         DefaultPreference.set(CommonConf.PREF_KEY_LOGIN_TOKEN, "")
      //             .then(function () {
      //                 console.log('login token saved.')
      //
      //             })
      //
      //         this.setState({
      //             isLoadingNow: false
      //         });
      //     }
      //     else {
      //         this.setState({
      //             isLoadingNow: false
      //         });
      //
      //         if (json.login_token === "") {
      //
      //         }
      //         else {
      //             // 로그인 토큰 저장
      //             DefaultPreference.set(CommonConf.PREF_KEY_LOGIN_TOKEN, json.login_token)
      //                 .then(function () {
      //                     console.log('login token saved.')
      //                 })
      //         }
      //         // Alert.alert(json.login_token);
      //         this.props.navigation.navigate('App')
      //     }
      // }).catch(error => {
      //     Alert.alert("서버 통신 상태가 원활하지 않습니다. 잠시 후 다시 시도해 주세요.");
      //     this.setState({
      //         isLoadingNow: false
      //     })
      // });

      this.setState({
          isLoadingNow: false
      });
  }

  // 로그인 진행
  // Validation Check
  _doLogin = (id, pw) => {

      Alert.alert(id+pw);
      let isValid = this._checkValidInputValues(id, pw);

      console.log("isValid : "+isValid);
      if (isValid) {
        // ACL Bay application Main 화면으로 이동
        this.props.navigation.navigate('App');
      }else {

      }
      // if (isValid) {
      //     this.setState({
      //         isLoadingNow: true
      //     })
      //
      //     var url = 'http://' + CommonConf.urlHost + ':8088/ss/api/login';
      //
      //     fetch(url, {
      //         method: 'POST',
      //         headers: {
      //             Accept: 'application/json',
      //             'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify({
      //             "id": id,
      //             "pw": sha256(id+pw),
      //             "auto_login": checked
      //         }),
      //     }).then(response => response.json()).then(json => {
      //         console.log(json);
      //
      //         if (json.resCode != 200) {
      //             Alert.alert(json.resMsg);
      //             this.setState({
      //                 isLoadingNow: false
      //             });
      //         }
      //         else {
      //             this.setState({
      //                 isLoadingNow: false
      //             });
      //
      //             if (json.login_token === "") {
      //
      //             }
      //             else {
      //
      //                 const _this = this;
      //
      //                 // 로그인 토큰 저장
      //                 DefaultPreference.set(CommonConf.PREF_KEY_LOGIN_TOKEN, json.login_token)
      //                     .then(function () {
      //                         console.log('login token saved.')
      //
      //                         // 로그인 유지 설정 값 저장
      //                         DefaultPreference.set(CommonConf.PREF_KEY_AUTO_LOGIN, checked ? "1" : "0")
      //                             .then(function () {
      //                                 console.log('auto login token saved.')
      //                                 _this.props.navigation.navigate('App')
      //                             })
      //
      //                     })
      //             }
      //             // Alert.alert(json.login_token);
      //
      //
      //         }
      //     }).catch(error => {
      //         Alert.alert("서버 통신 상태가 원활하지 않습니다. 잠시 후 다시 시도해 주세요.");
      //         this.setState({
      //             isLoadingNow: false
      //         })
      //     });
      // }
  }

  componentDidMount() {

      const _this = this;
      //
      // DefaultPreference.get(CommonConf.PREF_KEY_AUTO_LOGIN).then(function (isCheck) {
      //
      //     if (isCheck == "1") { // true,false가 아닌 1,0으로 저장 됨
      //
      //         _this.setState({
      //             isCheck: true
      //         })
      //
      //         DefaultPreference.get(CommonConf.PREF_KEY_LOGIN_TOKEN).then(function (value) {
      //             if (value === "") {
      //                 // 토근은 없으나 자동로그인은 켜져 있는 경우 (로그아웃 한 경우)
      //                 DefaultPreference.set(CommonConf.PREF_KEY_AUTO_LOGIN, "0")
      //                 .then(function () {
      //                     console.log('auto login off saved.')
      //                 })
      //             }
      //             else {
      //                 // 로그인유지가 켜져 있고 토큰이 있을 때는 토큰을 통한 로그인 시도
      //                 _this._doLoginWithToken(value);
      //             }
      //         })
      //     }
      // })
  }

  onClickListener = (viewId) => {
      //Alert.alert("Alert", "Button pressed "+viewId+"id: "+this.state.id+", pw: "+this.state.password);

      //Alert.alert(viewId);
      if(viewId == "restore_password"){
        // 패스워드 재설정 화면으로 이동
        Alert.alert("restore_password");
        //this.props.navigation.navigate('ResetPassword');
      }else if(viewId == "register"){
        // 회원가입 화면으로 이동
        //Alert.alert("register");
        this._goRegister();
      }else if(viewId == "login"){
        // 로그인 처리
        //Alert.alert("login");
        this._doLogin(this.state.id, this.state.password);
      }

      //Alert.alert("Alert", "Button pressed "+viewId);
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
