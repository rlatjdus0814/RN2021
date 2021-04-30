# React-Native 2021
# 201930301 김서연

## 04/30
> 1.

## 04/16 (github연동 오류로 4월 16일 README파일이 안올라갔었습니다,,!)
> 1. TodoList에 일정 추가하기
> 2. 화면에 TabBar 추가하기 

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
