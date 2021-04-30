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
 
 //2.12
 //2.13
 class App extends React.Component{
   constructor(){
     super()
     this.state={
       book: 'React Native in Action!'
     }
   }
   updateBook(){
     this.setState({
       book: 'Express in Action'
     })
   }
   render() {
     return(
       <BookDisplay 
         updateBook = { () => this.updateBook() }
         book = {this.state.book} />
     )
   }
 }
 
 class BookDisplay extends React.Component{
   render(){
     return(
       <View>
         <Text onPress={this.props.updateBook}>
           {this.props.book}
         </Text>
       </View>
     )
   }
 }
 
 export default App;
 