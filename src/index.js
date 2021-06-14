import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}
// subscribe를 이용하여 countStore에 변화가 있을때 마다 onChange를 실행함
countStore.subscribe(onChange);

// add에 event Listener를 추가하여 dispatch를 진행함
add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));