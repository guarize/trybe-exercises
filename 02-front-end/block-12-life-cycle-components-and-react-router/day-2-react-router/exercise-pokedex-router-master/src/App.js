import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex.jsx';
import pokemons from './data';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" render={() => <Pokedex pokemons={pokemons} />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
