import React from 'react'
import { View, Text } from 'react-native'

const DataTest = ({id, name, foo}) => { //props로 사용할 수 있도록 변수 지정
  foo = foo.map((item, i) => {
    return (
      <Text>{item}</Text>
    )
  }) //배열 foo에 있는 데이터를 <Text>태그에 넣어 리턴

  return ( //Midterm 컴포넌트로 리턴
    <View>
      {foo}
    </View>
  )
}

export default DataTest