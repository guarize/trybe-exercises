import React from 'react';
import Pokemon from './Pokemon';
import { Redirect } from 'react-router-dom';

class PokemonDetail extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { pokemons } = this.props;
    const pokemonWithId = pokemons.find((poke) => poke.id === Number(id));
    console.log(pokemonWithId);
    return <div>Olá</div>;
  }
}

export default PokemonDetail;
