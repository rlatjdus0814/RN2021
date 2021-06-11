import React, { Component } from 'react'
import RenderCom from './RenderCom' //RenderCom 컴포넌트 가져오기
import { View } from 'react-native'

class App extends React {
  constructor() {
    super()
    this.state = {
      name: '김서연',
      id: 201930301,
    }
  }

  render() {
    const {id, name} = this.state //구조분해 할당(id, name)
    return (
      <View>
        <RenderCom id={id} name={name} title={'기말평가'} /> 
      </View>
    );
  }
}

export default App