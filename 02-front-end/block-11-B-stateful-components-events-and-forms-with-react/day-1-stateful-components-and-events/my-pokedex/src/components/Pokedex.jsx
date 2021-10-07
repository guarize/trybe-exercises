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

      return {
        pokemonDisplay:
          previous.pokemonDisplay === pokemons.length - 1
            ? 0
            : previous.pokemonDisplay + 1,
      };
    });
  };

  fire = () => {
    return;
  };

  render() {
    const { pokemons } = this.props;
    const { pokemonDisplay } = this.state;
    console.log(pokemonDisplay);

    return (
      <div className='pokedex-container'>
        <div className='elements-container'>
          <button className='fire'>Fire</button>
          <button className='psychic'>Psychic</button>
        </div>
        <button onClick={this.nextPokemon} className='next-btn'>
          Next
        </button>
        <div className='pokedex'>
          {
            <Pokemon
              key={ pokemons[pokemonDisplay].id }
              pokemon={ pokemons[pokemonDisplay] }
            />
          }
        </div>
      </div>
    );
  }
}

export default Pokedex;
