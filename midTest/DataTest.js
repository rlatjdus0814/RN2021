import React from 'react'
import { View, Text } from 'react-native'

const DataTest = (props) => { //props로 사용할 수 있도록 변수 지정
  let {id} = props
  let {name} = props
  let {foo} = props //Midterm에서 전달받은 props를 구조분해 할당

  foo = foo.map((item, i) => {
    return (
      <Text key={i}>{item}</Text> //배열 key설정 / 렌더링할 때 key을 이용해 어떤 원소가 변경되었는지 빠르게 감지하기 위해 사용됨
    )
  }) //배열 foo에 있는 데이터를 <Text>태그에 넣어 리턴

  return ( //Midterm 컴포넌트로 리턴
    <View>
      <Text>
        학번: {id}
        {'\n'}
        이름: {name}
      </Text>
      {foo} 
    </View>
  )
}

export default DataTest