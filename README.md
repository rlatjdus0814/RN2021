# React-Native 2021
# 201930301 김서연

## 05/21
### 1. Text 컴포넌트 & View 컴포넌트
  - View에서 사용되는 대부분의 스타일을 Text에서도 사용 가능
  - Text에서 사용되는 스타일은 View에서 사용 불가

### 2. Font Style
  - fontFamily 속성에 여러 개의 폰트 지정 불가
  - 안드로이드에서 지원하지 않는 폰트가 지정 -> 기본 폰트 사용
  - 기본 폰트 외에 다른 폰트를 사용하려면 Platform 컴포넌트 사용
  ```java
    import { Platform } from 'react_native';
    ~
    {Platform.OS}
    ~
    cardName: {
      ...Platform.select({
        ios: { //플랫폼이 ios면 폰트는 'American Typewriter'
          fontFamily: 'American Typewriter',
        },
        android: { //플랫폼이 android면 폰트는 'monospace'
          fontFamily: 'monospace',
        },
      }),
    },
  ```
  1. font 속성
   - ① fontSize : 텍스트 크키 조정, 기본 크기는 14px
   - ② fontStyle : normal(기본) / italic(기울어짐) 두 옵션만 사용 가능
   - ③ fontWeight : 텍스트 굵기, 기본값은 normal / 400

### 3. 텍스트 장식하기
  : Text컴포넌트에 장식 스타일 적용하는 방법
  1. iOS & Android 지원 속성들
   - ① lineHeight: Text의 높이 지정
   - ② textAlign: 요소 내 텍스트를 수평으로 어떻게 정렬할지 지정
    > 옵션 : auto, center, right, left, justify
   - ③ textDecorationLine: 텍스트에 밑줄 또는 취소선 추가
    > 옵셥 : none(기본), underline, linethrough, inderline line-through
   - ④ textShadowColor: Text 음영 색상 지정
   - ⑤ textShadowOffset: Text 음영 위치 지정
   - ⑥ textShadowRadius: Text 음영 반경 지정
   ```java
    textShadowColor: 'black',
    textShadowOffset: {
      height: 2,
      width: 2,
    },
    textShadowRadius: 3,
   ```

  2. Android 지원 속성들
   - ① textAlignVertical

  3. iOS 지원 속성들
   - ① letterSpacing: 텍스트 글자 사이의 간격 지정
   - ② textDecorationColor: 선의 색상 변경
   - ③ textDecorationStyle: 선의 스타일 변경
   - ④ writingDirection: 텍스트 작성 방향 지정

  ### 4. 네비게이션(Navigation)
  : 앱의 핵심 기능 중 하나
  - 앱을 개발하기 전 네비게이션과 라우팅 계획 반드시 수립
  - 탭(tab-based) 네이게이션, 스택(stack-based) 네비게이션, 드로어(drawer-based) 네비게이션
  1. 탭(tab-based) 네이게이션
  : 화면의 위나 아래에 탭이 있고, 탭을 터치 시 연결된 페이지로 라우팅 됨
  2. 스택(stack-based) 네비게이션
  : 기존 화면 위에 다른 화면이 스택 구조로 쌓이는 방법
  - 화면 이동 후 스택에 있는 이전 화면으로 되돌아가거나 다음 화면을 이동 가능
  3. 드로어(drawer-based) 네비게이션
  : 화면의 왼쪽이나 오른쪽에서 나오는 사이드 메뉴
  - 메뉴 항목 선택 시 드로어는 닫히고, 메뉴 화면으로 이동

## 05/14
### border 속성 지정하기
  - border : 컴포넌트 경계의 테두리
  - 테두리가 있어야 화면의 요소들을 구체적으로 볼 수 있음
  
### 1. border속성들
  > ① 컴포넌트 전체에 속성을 지정 가능\
  > ② top, right, bottom, left를 이용해 각 측면에 속성 지정 가능
  - borderColor : 테두리의 색상 
  - borderRadius : 테두리의 모서리를 둥글게 하는 속성 
  - borderStyle : 테두리의 스타일, 실선이나 점선 등 표현
  - borderWidth : 테두리의 크기, 숫자값
  ```java
   const styles = StyleSheet.create({
    container: {
      borderColor: 'red',
      borderRadius: 15,
      borderStyle: 'dashed',
      borderWidth: 3
     }
   })
  ```

### 2. color, width, style 속성
  - borderWidth속성만 지정하면 기본적으로 borderColor는 'black', borderStyle은 'solid'(실선)로 지정됨

### 3. borderRadius로 모양 만들기
  : borderRadius속성은 전체 모서리에 적용
  - Text 컴포넌트는 부모 컴포넌트의 배경색을 상속\
    -> 도형에 나타나는 글자를 크거나 길면 배경이 테두리와 겹침\
    -> Text 컴포넌트의 배경을 투명하게 하거나 margin 속성 이용해서 해결

### 4. Margin(마진)과 Padding(패딩)
  - margin과 padding을 같이 사용 -> 컴포넌트를 레이아웃 내에 유연하게 배치 가능
  1. Margin(마진)\
  : 컴포넌트 사이의 위치를 상대적으로 배치
  - 다른 컴포넌트나 부모컴포넌트로부터의 간격을 설정
  - margin 속성 : margin, marginTop, marginRight, marginBottom, marginLeft
  - margin 속성만 지정 -> 모든 측면이 동일하게 적용
  - 음수 margin의 경우 잘려나가는 경우 발생

  2. Padding(패딩)\
  : 컴포넌트의 테두리로부터 컴포넌트의 상대 위치 정의\
  - 컴포넌트의 테두리로부터 자식 요소의 간격에 적용
  - padding 속성 : padding, paddingTop, paddingRight, paddingBottom, paddingLeft
  - 해당 컴포넌트의 경계선에 제한 되지 않음

  ### 5. Position(포지션)
  : 컴포넌트를 절대 위치를 이용해 특정한 위치에 배치
  - position 속성 : relative(기본값), absolute
  - relative로 속성 지정 -> 다른 요소들에 상대적으로 배치
  - absolute로 속성 지정 -> 부모 요소의 위치를 기준 절대적으로 배치
  - css만큼 다양한 옵션 지원x
 
## 05/07
> 1. 구조분해할당
 - 배열이나 객체의 속성을 해체

  ### 객체에서 변수를 재할당
 ```java 
  const foobar = {
    foo: 100,
    bar: 500,
  }
 ```

  ### foobar에 있는 foo변수를 woo로 변경하고 싶을 때
 ① 구조분해 할당 없이 변수명 재할당
  ```java
    const woo = foobar.foo
  ```
 ② 구조분해 할당 이용
  ```java
  1. const { foo:woo } = foobar
  2. console.log(woo) //100
  3. console.log(foobar) //let new = { foo: 100:, bar: 500 }
  ```
 ③ React에서 자주 사용되는 구조분해 할당
  ```java
    this.state={
      foo: 100,
      bar: 200,
    }
    const { foo, bar } = this.state;
  ```

### 새로운 변수 이름으로 할당
  - 새로운 변수 선언 후 속성들을 해체 -> 다른 이름의 변수로 다시 할당
  ```java
    var new = { a:42, b: true};
    var { a: num, b: bool } = new;

    console.log(num); //42
    console.log(bool); //true
  ```

> 2. styel 변수로 지정하기
  - profileCardColor변수에 색상이름 작성 -> style속성에 해당 태그에 배경색 지정 
  ```java
  const profileCardColor = 'dodgerblue'

  const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: profileCardColor,
    }
  })
  ```

## 04/30
> 1. 컴포넌트 스타일시트를 외부로 분리하기
```java
import { StyleSheet } from 'react';
const style = StyleSheet.create({ //create로 css 생성하고, json으로 속성 설정
  container: {
    ...baseContainerStyles,
    backgroundColor: Colors.dark
  },
})
export { styles, buttons } //상수 styles, buttons 외부에서 사용할 수 있도록 export
```
> 2. 버튼을 클릭할 때 마다 darkTheme의 상태가 바뀌도록 !(Not) 사용
```
this.setState({darkTheme: !this.state.darkTheme})
```
> 3. bind -> 전역에서 사용가능 - 바인딩은 constructor 맨 밑에 작성
  - 예외 발생하지 않도록 컴포넌트에 bind
```java
constructor(props) {
    super(props);
    this.state = {
      darkTheme: false
    }
    this.toggleTheme = this.toggleTheme.bind(this);
  }
```
> 4. Flatten Style
  - 같은 style이면 마지막에 선언된 style로 지정

## 04/16 (github연동 오류로 4월 16일 README파일이 안올라갔었습니다,,!)
> 1. TodoList에 일정 추가하기
  - TodoList컴포넌트에서 Todo컴포넌트로 App의 todo 배열에 있는 item들 출력하기
```java
todos = todos.map((todo, i) => {
    return (
      <Todo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo} /> //todo item props
    )
  })
```
> 2. 화면에 TabBar컴포넌트로 하단바 추가하기
  - 하단바의 아이템들은 <TabBarItem>태그로 묶어주기
```java
<View style={styles.container}>
    <TabBarItem  type={type} title='All'
      setType={() => setType('All')} />
    <TabBarItem type={type} border title='Active'
      setType={() => setType('Active')} />
    <TabBarItem type={type} border title='Complete'
      setType={() => setType('Complete')} />
  </View>
```

## 04/09
> 1. 각각의 컴포넌트 import하기
> 2. 개발자 메뉴에서 console.log 확인
> 3. Input에 입력 시 onChangeText 함수로 console에 나타내기
> 4. Button 클릭 시 submitTodo 함수 실행

## 04/02
> 1. props와 state 구조 분해 할당
> 2. 속성 초기화와 생성자 사용하기
> 3. 생성주기 메서드
  - static getDerivedStateFromProps메소드
   > - 컴포넌트가 생성될 때, 새 props를 전달받을 때 호출
   > - 새로운 props와 최근의 state를 인수로 받아 하나의 객체로 반환
   > - 컴포넌트의 state로 갱신
  - componentDidMount메소드
   > - 로딩되고 한 번만 호출
   > - Ajax호출로 가져온 데이터 처리
   > - 지정된 실행 후 실행되는 setTimeout 처리
   > - 다른 자바스크립트 프레임워크와 통합하기 적절함
  - shouldComponentUpdate메소드
   > - Boolean 반환
   > - 렌더링 여부 결정
  - componentWillUpdate메소드
   > - 재 렌더링 후 바로 호출
   > - 이전 state와 props를 인수로 가짐
  - componentWillUnmount메소드
   > - 파기되기 전 호출

## 3/26
> 1. 컴포넌트(Component) : 리액트, 리액트 네이티브의 조립 블록
> 2. constructor() : 생성자 메소드, 컴포넌트 생성 시 한 번만 실행
> 3. render() :  컴포넌트 렌더링
> 4. state : 컴포넌트가 다루는 값들의 집합체
> 5. state는 변경 가능하고, props는 변경 불가
> 6. state는 this.setState() 호출로 갱신
