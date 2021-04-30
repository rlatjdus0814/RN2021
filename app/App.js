import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { styles, buttons } from './styles' 

let todoIndex = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }

  render() {
    const { inputValue, todos, type } = this.state
    return (
      <View style={styles.container}>
        <TouchableHighlight style={buttons.primary}>
          <Text>Sample Text</Text>
        </TouchableHighlight>
      </View>
    )
  }
}



export default App