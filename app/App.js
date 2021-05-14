import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Example style={{borderWidth: 1}}>
          <Text>borderWidth: 1</Text> 
        </Example>
        <Example style={{borderWidth: 3, borderLeftWidth: 0}}>
          <Text>borderWidth: 3, borderLeftWidth: 0</Text> 
        </Example>
        <Example style={{borderWidth: 3, borderLeftColor: 'red'}}>
          <Text>borderWidth: 3, borderLeftWidth: 'red'</Text> 
        </Example>
        <Example style={{borderLeftWidth: 3}}>
          <Text>borderLeftWidth: 3</Text> 
        </Example>
        <Example style={{borderWidth: 1, borderStyle: 'dashed'}}>
          <Text>borderWidth: 1, borderStyle: 'dashed'</Text> 
        </Example>
      </View>
    );
  }
}

const Example = (props) => (
  <View style={[styles.exmaple, props.style]}>
    {props.children}
  </View>
)

const profileCardColor = 'dodgerblue'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exmaple: {
    marginBottom: 15,
  }
})

export default App 



