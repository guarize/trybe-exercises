import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

test('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = async () => ({ json: async () => joke });

  render(<App />);
  const jokeText = await screen.findByText(joke.joke);
  expect(jokeText).toBeInTheDocument();
});
