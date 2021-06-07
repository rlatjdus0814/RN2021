import React from 'react'
import Books from './src/Books' //Books 컴포넌트 가져오기
import rootReducer from './src/reducers' //index를 찾지 않아도 index를 가져옴/ rootReducer 가자ㅕ오기
import { Provider } from 'react-redux' //react-redux에서 Provider 래퍼(Provider wrapper) 가져오기
import { createStore } from 'redux' //redux에서 createStore 가져오기

const store = createStore(rootReducer) //rootReducer를 이용해서 store객체 생성

export default class App extends React.Component {
  render() {
    return (
      //Provider컴포넌트로 감싼 Books 컴포넌트 반환, Provider의 prop로 store를 전달
      <Provider store={store}>
        <Books />
      </Provider>
    )
  }
}