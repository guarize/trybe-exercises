import React from 'react';
import Pokemon from './Pokemon';
import { Redirect} from 'react-router-dom';

class PokemonDetail extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const { pokemons } = this.props;
    const pokemon = pokemons.find((poke) => poke.id === Number(id));
    const { foundAt, summary } = pokemon;
    console.log(foundAt);
    return !pokemon ? (
      <Redirect to="/" />
    ) : (
      <div>
        <Pokemon pokemon={pokemon} />
        <div className="summary">
          <h3>Summary</h3>
          <p>{summary}</p>
        </div>
        <div className="location">
          {foundAt.map(({ location, map }) => (
            <div key={location} className="location-element" >
              <h3>{location}</h3>
              <img src={map} alt="pokemon location" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
