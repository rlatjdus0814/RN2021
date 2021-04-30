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

//2.17
//2.18
//2.19
class App extends React.Component{
  constructor(){
    super()
    this.state={
      loading: true,
      data: data: {
        name: 'Nader Dabit',
        age: 35
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.name !== this.props.name) {
      return true
    }
    return false
  }

  //현재는 componentWillUpdate로 대신해서 씀
  componentDidUpdate(prevProps, prevState){
      if(PrevState.showToggled === this.state.showToggled){
          this.setState({
              showToggled: !showToggled
          })
      }
  }

  handleClick(){
    this._timeout = setTimeout(()=>{
      this.openWidget();
    }, 2000)
  }
  
  componentWillUnmount(){
    clearTimeout(this._timeout);
  }

  render(){
    if(this.state.loading){
      return <Text>Loading</Text>
    }
    const {name, age} = this.state.data
    return(
      <View>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
      </View>
     
    )
  }
}

export default App;
