import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex.jsx';
import pokemons from './data';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/pokemons/:id"
              render={(props) => <PokemonDetail {...props} pokemons={pokemons} />}
            />
            <Route path="/" render={() => <Pokedex pokemons={pokemons} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
