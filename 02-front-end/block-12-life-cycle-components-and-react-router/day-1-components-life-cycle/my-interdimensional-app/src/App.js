import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  fetchCharacters = async () => {
    const apiFetch = await fetch('https://rickandmortyapi.com/api/character');
    const apiJSON = await apiFetch.json();
    this.setState({ characters: apiJSON.results });
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Ricky and Morty Characters:</h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
