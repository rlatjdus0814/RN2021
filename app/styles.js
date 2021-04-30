import { StyleSheet } from 'react-native' //스타일시트 외부로 분리

const styles = StyleSheet.create({ //create로 css 생성하고, json으로 속성 설정
  container: {
    marginTop: 150,
    backgroundColor: '#ededed',
    flexWrap: 'wrap',
  }
})

const buttons = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
})

export { styles, buttons } //상수 styles, buttons 외부에서 사용할 수 있도록 export