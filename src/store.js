import { createStore } from "redux";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

// createAction은 type, payload라는 객체를 가짐
// type에는 ADD, payload에는 이용자로부터 전달받은 데이터가 담김
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const add = () => { state.push() } 는 return 없는 void 함수
// const add = () => state.filter() 는 state.filter()가 return 처리됨
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    // state.push() 하는 것은 state를 mutate 하는 것이지만 createReducer안에서는 Immer라는 것이 mutate 가능하게 해줌
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    // state.filter() 하는 것은 새로운 state를 return 하는 것임
    state.filter((toDo) => toDo.id !== action.payload),
});

// createStore 대신 configureStore로 사용 가능 (devTools, middleware와 같은 설정 가능함)
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;
