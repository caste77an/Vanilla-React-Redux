import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// 변수에 문자열을 담는 형식으로 써야 에러 났을때 발견 가능함
const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  // if else 를 쓰는것 보다 switch case가 가독성 좋음
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
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
add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));