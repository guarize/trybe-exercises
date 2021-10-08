import React from 'react';
import Pokemon from './Pokemon.jsx';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonDisplay: 0,
      pokemonList: this.props.pokemons,
      disabledBtn: false,
    };
  }

  nextPokemon = () => {
    const { pokemonList } = this.state;

    this.setState((prev, _props) => {
      return {
        pokemonDisplay:
          prev.pokemonDisplay === pokemonList.length - 1 ? 0 : prev.pokemonDisplay + 1,
      };
    });
  };

  pokemonTypes = (type) => {
    const { pokemons } = this.props;
    const specificType = pokemons.filter((pokemon) => pokemon.type === type);

    this.setState({
      pokemonDisplay: 0,
      pokemonList: specificType,
      disabledBtn: specificType.length === 1 ? true : false,
    });
  };

  allPokemons = () => {
    this.setState({
      pokemonDisplay: 0,
      pokemonList: this.props.pokemons,
    })
  }
  
  render() {
    const { 
      pokemonTypes,
      allPokemons, 
      nextPokemon, 
      props: {pokemons}, 
      state: { pokemonDisplay, pokemonList, disabledBtn } 
    } = this;
    console.log(disabledBtn);
    const noDuplicates = [...new Set(pokemons.map((poke) => poke.type))]
    
    return (
      <div className='pokedex-container'>
        <div className='elements-container'>
          {noDuplicates.map((pokemon, i) => (
            <button onClick={ () => pokemonTypes(pokemon) } key={ i } className={`type-button ${pokemon}`}>
              {pokemon}
            </button>
          ))}
        </div>
        <div className='pokedex'>
          {
            <Pokemon
              pokemon={ pokemonList[pokemonDisplay] }
            />
          }
        </div>
        <button onClick={ nextPokemon } disabled={ disabledBtn } className='next-btn'>
          Next
        </button>
        <button onClick={ allPokemons } className='all-btn'>
          All
        </button>
      </div>
    );
  }
}

export default Pokedex;
