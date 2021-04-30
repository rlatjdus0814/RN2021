import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeAppEventEmitter,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//2.15
export default class App extends Component{
  state={
    userLoggedIn: false
  }
  static getDerivedStateFromProps(nextProps, nextState){
    if(nextProps.authenticated){
      return{
        userLoggedIn: true
      }
    }
    return null;
  }
  render() {
    return(
      <View>
        {this.state.userLoggedIn && (
          <AuthenticatedComponent />
          )
        }
      </View>
    );
  }
}

