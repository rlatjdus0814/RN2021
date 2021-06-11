import React, { Component } from 'react'
import { View } from 'react-native'
import Styles from './Styles'

class RenderCom extends React {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      title: props.title,
    }
  };

  render(){
    const {id, name, title} = this.state; //구조분해 할당(id, name, title)
    const styles = ComStyles(true);
    return (
      <View style={styles.viewAlign}>
        <View style={styles.viewAlign}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.line}>===================</Text>
          <Text style={styles.id}>학번: {id}</Text>
          <Text style={styles.name}>이름: {name}</Text>
        </View>
      </View>
    );
  }
}

export default RenderCom