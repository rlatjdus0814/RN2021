import React, { Component } from 'react'
import { View, Text } from 'react-native'
import DataTest from './DataTest'

class Midterm extends Component {
  constructor() {
    super()
    this.state = {
      id: '201930301',
      name: '김서연',
      foo: [1,2,3,4,5],
    }
  }

  render(){
    const { id, name, foo } = this.state
    return(
      <View>
        <Text>학번 : {id}</Text>
        <Text>이름 : {name}</Text>
        <DataTest id={id} name={name} foo={foo}></DataTest>
      </View>
    )
  }

}

export default Midterm