import { DECREMENT, INCREMENT, RESET, TOGGLE } from "../constants";

const initialState = {
  counter: 0,
  show: false,
};

const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0 };
    case RESET:
      return { ...state, counter: 0};
    case TOGGLE:
      return { ...state, show: !state.show};
    default:
      return state;
  }
};

export default reducerCounter;
