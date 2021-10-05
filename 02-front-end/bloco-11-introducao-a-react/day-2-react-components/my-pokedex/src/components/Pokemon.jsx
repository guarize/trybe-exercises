import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

    return (
      <div className='pokemon'>
        <div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>
          { averageWeight.value } { averageWeight.measurementUnit }
        </p>
        </div>
        <img src={image} alt={name} />
      </div>
    );
  }
}

export default Pokemon;
