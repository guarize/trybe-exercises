import React from 'react';
import Pokemon from './Pokemon.jsx';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonDisplay: 0,
    };
  }

  nextPokemon = () => {
    this.setState((previous, props) => {
      const { pokemons } = props;

      if (previous.pokemonDisplay === pokemons.length - 1) {
        return ({ pokemonDisplay: 0})
      }

      return ({
        pokemonDisplay: previous.pokemonDisplay + 1,
      });
    });
  };

  render() {
    const { pokemons } = this.props;
    const { pokemonDisplay } = this.state;
    console.log(pokemonDisplay);

    return (
      <div className='pokedex-container'>
        <button onClick={this.nextPokemon} className='next-btn'>
          Next
        </button>
        <div className='pokedex'>
          { <Pokemon key={pokemons[pokemonDisplay].id} pokemon={pokemons[pokemonDisplay]} /> }
        </div>
      </div>
    );
  }
}

export default Pokedex;
