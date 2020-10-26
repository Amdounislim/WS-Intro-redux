import { DECREMENT, INCREMENT, RESET, TOGGLE } from "../constants";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
export const toggle = () => {
  return {
    type:TOGGLE,
  };
};