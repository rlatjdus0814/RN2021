//actions 파일에서 ADD_BOOK 상수 가져옴
import { ADD_BOOK, REMOVE_BOOK } from '../actions'
import uuidV4 from 'uuid/v4'

//초기 상태
const initialState = {
  books: [{ name: 'East of Eden', author: 'John Steinbeck', id: uuidV4() }],
}

//state 인수의 기본 값 initialState로 설정
//두 번째 인수에 액션 추가
const bookReducer = (state = initialState, action) => {
  //액션의 ype에 따라 분기하는 switch문 추가
  switch (action.type) {
    case ADD_BOOK:
      //액션의 type이 ADD_BOOK이면, 새 books 배열을 반환함
      return {
        books: [...state.books, action.book],
      }

    case REMOVE_BOOK:
      const index = state.books.findIndex(
        book => book.id === action.book.id
      )
      return {
        books: [
          ...state.books.slice(0, index),
          ...state.books.slice(index + 1),
        ],
      }

    //해당되지 안흐면 기존의 state 그대로 반환
    default:
      return state
  }
}

export default bookReducer