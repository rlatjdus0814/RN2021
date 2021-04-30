/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
 
 //2.14
 class App extends React.Component{
   constructor(){
     super()
     this.state={
       leapYear: true,
       info: {
         type: 'programming'
       }
     }
   }
   render() {
     return(
       <BookDisplay 
         leapYear={this.state.leapYear}
         info={this.state.info}
         topics={['React', 'React Native', 'JavaScript']} />
     )
   }
 }
 
 const BookDisplay = (props) => {
   let leapyear;
   let {topics} = props;
   const {info} = props;
   topics = topics.map((topic,i) => {
     return <Text>{topic}</Text>
   });
   if(props.leapYear){
     leapyear = <Text>This is a leapyear!</Text>
   }
   return(
     <View>
       {leapyear}
       <Text>Book type: {info.type}</Text>
       {topics}
     </View>
   )
 }
 
 export default App;
 