import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex.jsx';
import PokemonDetail from './components/PokemonDetail';
import NavBar from './components/NavBar';
import About from './components/About';
import NotFound from './components/NotFound';
import Favorites from './components/Favorites';
import pokemons from './data';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      favorites: [],
    };
  }

  render() {
    const { favorites } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route
              path="/pokemons/:id"
              render={(props) => (
                <PokemonDetail
                  {...props}
                  favorites={favorites}
                  pokemons={pokemons}
                />
              )}
            />
            <Route path="/favorites" render={() => <Favorites pokemons={pokemons} />} />
            <Route path="/about" component={About} />
            <Route
              exact
              path="/"
              render={() => <Pokedex pokemons={pokemons} />}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
