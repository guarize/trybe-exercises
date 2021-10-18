import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const {
      pokemon: { name, type, averageWeight, image, id },
    } = this.props;

    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link className="router-link" to={`pokemons/${ id }`}>Learn More</Link>
        </div>
        <img src={image} alt={name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
