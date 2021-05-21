import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

//다양한 border radius 조합 지정하기
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Example style={{borderRadius: 20}}>
          <CenteredText>
            Example 1:{"\n"} 네 모서리가 둥근 사각형
          </CenteredText> 
        </Example>
        <Example style={{borderTopRightRadius: 60, borderBottomRightRadius: 60}}>
          <CenteredText>
            Example 2:{"\n"} 오른쪽 두 모서리가 둥근 사각형
          </CenteredText> 
        </Example>
        <Example style={{borderTopLeftRadius: 30, borderBottomRightRadius: 30}}>
          <CenteredText>
            Example 3:{"\n"} 대각선 반대편 모서리가 둥근 사각형
          </CenteredText> 
        </Example>
        <Example style={{borderRadius: 60}}>
          <CenteredText>
            Example 4:{"\n"} 원
          </CenteredText> 
        </Example>
      </View>
    );
  }
}

const Example = (props) => (
  <View style={[styles.example, props.style]}>
    {props.children}
  </View>
);

const CenteredText = (props) => (
  <Text style={[styles.centeredText, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 75,
  },
  example: {
    width: 120,
    height: 120,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
  },
  centeredText: {
    textAlign: 'center',
    margin: 10,
  }
});

export default App 



