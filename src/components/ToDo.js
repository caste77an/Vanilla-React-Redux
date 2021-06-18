import React from "react";
import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

// ownProps: 컴포넌트를 랜더링 할때 직접 넣어주는 props를 불러오는 기능
function mapDispatchToProps(dispatch, ownProps) {
  return {
    // store에서 생성한 "id: Date.now()"를 deleteToDo에 dispatch함
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
