import { combineReducers } from 'redux'; //redux에서 combineReducers 가져오기
import bookReducer from './bookReducer'; //bookReducer 가져오기

//rootReducer는 모든 리듀서 포함하고 있음
//여기서는 하나의 리듀서만 포함
const rootReducer = combineReducers({
  bookReducer
})

export default rootReducer