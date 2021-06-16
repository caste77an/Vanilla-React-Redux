import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

// ownProps: 컴포넌트를 랜더링 할때 직접 넣어주는 props를 불러오는 기능
function mapDispatchToProps(dispatch, ownProps) {
  return {
    // store에서 생성한 "id: Date.now()"를 deleteToDo에 dispatch함
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
