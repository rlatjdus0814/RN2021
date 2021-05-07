import { StyleSheet } from 'react-native' //스타일시트 외부로 분리

export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseBoxStyles = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 150,
};

const lightStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.light
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.dark
  }
});

const darkSytleSheet = StyleSheet.create({ //create로 css 생성하고, json으로 속성 설정
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark
  },
  box: {
    ...baseBoxStyles,
    borderColor: Colors.light
  }
})

//export { styles, buttons } //상수 styles, buttons 외부에서 사용할 수 있도록 export
export default function getStyleSheet(useDarkTheme){
  return useDarkTheme ? darkSytleSheet : lightStyleSheet;
}