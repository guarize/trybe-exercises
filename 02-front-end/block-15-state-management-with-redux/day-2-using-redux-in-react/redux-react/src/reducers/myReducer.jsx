const INITIAL_STATE = [];

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
};

export default myReducer;
