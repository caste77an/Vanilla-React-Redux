import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// createAction은 type, payload라는 객체를 가짐
// type에는 ADD, payload에는 이용자로부터 전달받은 데이터가 담김
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       // addToDo 시 전달받은 text가 action.payload에 담김
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       // deleteToDo 시 전달받은 id가 action.payload에 담김
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

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

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;
