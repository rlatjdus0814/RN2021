import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

//컴포넌트에 다양한 마진 적용하기
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.exampleContainer}>
          <Example>
            <CenteredText>A</CenteredText>
          </Example>
        </View>

        <View style={styles.exampleContainer}>
          <Example style={{marginTop: 50}}>
            <CenteredText>B</CenteredText>
          </Example>
        </View>

        <View style={styles.exampleContainer}>
          <Example style={{marginTop: 50, marginLeft: 10}}>
            <CenteredText>C</CenteredText>
          </Example>
        </View>

        <View style={styles.exampleContainer}>
          <Example style={{marginLeft: -10, marginTop: -10}}>
            <CenteredText>D</CenteredText>
          </Example>
        </View>
      </View>
    );
  }
}

const Example = (props) => (
  <View style={[styles.example, props.style]}>
    {props.children}
  </View>
)

const CenteredText = (props) => (
  <Text style={[styles.centeredText, props.style]}>
    {props.children}
  </Text>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 75,
  },
  exampleContainer: {
    width: 120,
    height: 120,
    borderStyle: 'solid',
    marginLeft: 20,
    marginBottom: 20,
    borderWidth: 1,
  },
  example: {
    borderWidth: 1,
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
    margin: 10,
  }
});

export default App 



