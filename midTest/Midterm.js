import React, { Component } from 'react'
import { View } from 'react-native'
import DataTest from './DataTest' //DataTest컴포넌트 import해주기

class Midterm extends Component {
  constructor() {
    super()
    this.state = {
      id: '201930301',
      name: '김서연',
    }
  }

  render(){
    const { id, name } = this.state //구조분해 할당
    return(
      <View>
        {/* DataTest컴포넌트로 전달 */}
        <DataTest id={id} name={name} foo={[1,2,3,4,5]}></DataTest> 
      </View>
    )
  }

}

export default Midterm