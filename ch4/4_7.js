import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

//ProfileCard 컴포넌트를 위한 초기 형태
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer} />
      </View>
    )
  }
}

const profileCardColor = 'dodgerblue'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  }
})

export default App 



