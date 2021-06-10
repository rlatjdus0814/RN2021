//리듀서에서 데이터를 변경하려면 액션을 통해서 변경
export const ADD_BOOK = 'ADD_BOOK' //리듀서에서 재사용할 수 있도록 ADD_BOOK 상수를 만들어서 export
export const REMOVE_BOOK = 'REMOVE_BOOK'
import uuidV4 from 'uuid/v4'

export function removeBook(book) {
  return {
    type: REMOVE_BOOK,
    book
  }
}

function fetchBooks() {
  return {
    type: 'FETCH_BOOKS'
  }
}

//addBook이라는 함수를 만들고 type정보와 하나의 인수로 전달된 도서 객체 반환
export function addBook(book) {
  return {
    type: ADD_BOOK,
    book: {
      ...book,
      id: uuidV4()
    }
  }
}