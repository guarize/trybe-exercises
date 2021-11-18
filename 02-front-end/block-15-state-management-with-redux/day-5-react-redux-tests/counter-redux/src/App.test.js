import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should have a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });
    const buttonAdicionar = queryByText('Add');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText(/5/)).toBeInTheDocument();
  });

  test('the add button should work', () => {
    const { queryByText } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 0 } },
    });

    const buttonAdicionar = queryByText('Add');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText(/0/)).toBeInTheDocument();

    userEvent.click(buttonAdicionar);

    expect(queryByText(/1/)).toBeInTheDocument();
  });

  test('the sub button should work', () => {
    const { queryByText } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 1 } },
    });

    const buttonSubtrair = queryByText('Sub');
    expect(buttonSubtrair).toBeInTheDocument();
    expect(queryByText(/1/)).toBeInTheDocument();

    userEvent.click(buttonSubtrair);

    expect(queryByText(/0/)).toBeInTheDocument();
  });
});
