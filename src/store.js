import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// createAction은 type, payload라는 객체를 가짐
// type에는 ADD, payload에는 이용자로부터 전달받은 데이터가 담김
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      // addToDo 시 전달받은 text가 action.payload에 담김
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      // deleteToDo 시 전달받은 id가 action.payload에 담김
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;
