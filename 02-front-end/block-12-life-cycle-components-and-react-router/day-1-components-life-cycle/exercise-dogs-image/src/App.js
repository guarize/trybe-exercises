import React from 'react';
import Dogs from './Components/Dogs';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      dogs: {},
      loading: true,
    };
  }

  fetchDogs = async () => {
    this.setState({ loading: true }, async () => {
      const dogsFetch = await fetch('https://dog.ceo/api/breeds/image/random');
      const dogsResponse = await dogsFetch.json();
      this.setState({ dogs: dogsResponse, loading: false });
    });
  };

  componentDidMount() {
    this.fetchDogs();
  }

  render() {
    return (
      <div className="main-container">
        <Dogs { ...this.state} fetchDogs={ this.fetchDogs } />
      </div>
    );
  }
}

export default App;
