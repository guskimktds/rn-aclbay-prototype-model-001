import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

// import HomeScreen from './src/components/HomeScreen';
// import DetailScreen from './src/components/DetailScreen';
// import ModalScreen from './src/components/ModalScreen';
import ACLMain from './src/components/Main/ACLMain';
import ProductRegist from './src/components/Main/ProductRegist';

import SignIn from './src/components/Users/SignIn';
import SignUp from './src/components/Users/SignUp';
import ResetPassword from './src/components/Users/ResetPassword';



const MainStack = createStackNavigator(
  {
    Main: {
      screen: ACLMain,
    },
    ProductRegist: {
      screen: ProductRegist,
    },
  },
  {
    initialRouteName: 'Main',
    //화면전환 애니메이션 start
    //화면전환 애니메이션 end
    defaultNavigationOptions: {
      headerStyle: {
        display: "none",
        backgroundColor: '#f4511e',
      },
      //headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff'
      },
    },
  }
);

const UserStack = createStackNavigator(
  {
    SignIn: SignIn,
    SignUp: SignUp,
    ResetPassword: ResetPassword
  }, {
    initialRouteName: 'SignIn',
    /* 네비게이션 헤더 옵션 */
    defaultNavigationOptions: {
      headerStyle: {
        display: "none",
        backgroundColor: '#4baec5',
      },
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff'
      },
    },
  });

  const RootStack = createSwitchNavigator(
    {
      Auth: UserStack,
      App: MainStack
    },
    {
      initialRouteName: 'Auth',
    }
  );
// const RootStack = createStackNavigator(
//   {
//     Main: {
//       screen: MainStack,
//     },
//     MyModal: {
//       screen: ModalScreen,
//     },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   }
// );

//export default createAppContainer(AppNavigator);
//const AppContainer = createAppContainer(AppNavigator);
//const Tabs = createBottomTabNavigator({ AppNavigator });

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }


  state = {
    animating: false,
    align: 'center',
    alignsecond: false,   // 앱 시작 인트로 애니메이션 끝났는지 여부
    isLogined: false  // 로그인 토큰을 가지고 있는지 여부
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: this.state.align,
          backgroundColor: '#4baec5'
        }}>
          <AppContainer />
      </View>
    );
  }
}
