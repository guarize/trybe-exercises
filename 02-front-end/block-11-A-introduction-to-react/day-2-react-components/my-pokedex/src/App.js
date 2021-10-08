import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex.jsx';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Pokedex</h1>
        <div className='pokedex'>
          <Pokedex pokemons={pokemons} />
        </div>
      </div>
    );
  }
}

export default App;
