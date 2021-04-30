# React-Native 2021
# 201930301 김서연

## 04/30
> 1. 컴포넌트 스타일시트를 외부로 분리하기
```java
import { StyleSheet } from 'react-native' //스타일시트 외부로 분리
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
