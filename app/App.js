import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { styles, buttons } from './styles' 

let todoIndex = 0

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: false
    }
    this.toggleTheme = this.toggleTheme();
  }

  toggleTheme = () => {
    this.setState({darkTheme: !this.state.darkTheme})
  }

  render() {
    const styles = getStyleSheet(this.state.darkTheme);
    const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Button title={backgroundColor onPress={this.toggleTheme}} />
        </View>
      </View>
    )
  }
}



