import React from 'react';

class Dogs extends React.Component {
  render() {
    const { dogs, loading, fetchDogs } = this.props;
    return (
      <div className="dogs-container">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <img className="dog-image" src={dogs.message} alt={dogs.message} />
        )}
        <button type="button" onClick={ fetchDogs }>Next Dog</button>
      </div>
    );
  }
}

export default Dogs;
