const Redux = require('redux');

const initialState = {
  login: false,
  email: '',
};

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('alguem@email.com'));

const state = store.getState();

console.log(state);
