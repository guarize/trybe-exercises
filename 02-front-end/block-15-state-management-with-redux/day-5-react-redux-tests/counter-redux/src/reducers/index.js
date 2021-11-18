const INITIAL_STATE = {
  counter: 0,
};

const clickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CLICK':
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default clickReducer;
