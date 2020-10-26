import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../JS/actions/actionCounter";

const Counter = (props) => {
  return (
    <>
      <button onClick={props.increment}>+</button>
      <h1>{props.counter}</h1>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.reset}>Reset</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { counter: state.reducerCounter.counter };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
//   };
// };

// const mapDispatchToProps={
//     increment,
//     decrement
// }

export default connect(mapStateToProps, {increment, decrement, reset})(Counter);
