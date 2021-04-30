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
 
 //2.9
 //2.10
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
        const {book} = this.state;
       <BookDisplay 
         updateBook = { () => this.updateBook() }
         book = {book} />
     )
   }
 }
 
 class BookDisplay extends React.Component{
   render(){
        const {book, updateBook} = this.props;
     return(
       <View>
         <Text onPress={updateBook}>
           {book}
         </Text>
       </View>
     )
   }
 }
 
 export default App;
 