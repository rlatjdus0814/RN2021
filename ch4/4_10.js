import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('./user.png')} />
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: 300,
    height: 400,
    backgroundColor: profileCardColor,
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cardImage: {
    width: 80,
    height: 80,
  }
});

export default App 



