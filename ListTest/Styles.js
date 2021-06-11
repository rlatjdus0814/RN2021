import { StyleSheet } from 'react-native' //스타일시트 외부로 분리
import Styles from './Styles' 

const componStyle = StyleSheet.create({ //create로 css 생성하고, json으로 속성 설정
  title: {
    color: 'white',
    fontWeight: 500,
  },
  line: {
    color: 'white',
    fontWeight: 500,
  },
  id: {
    color: 'white',
    fontWeight: 500,
  },
  name: {
    color: 'white',
    fontWeight: 500,
  },
  viewAlign: {
    flexDirection: column,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: 600,
  }
})

export default function ComStyles(style){
  return style ? componStyle : null;
}
