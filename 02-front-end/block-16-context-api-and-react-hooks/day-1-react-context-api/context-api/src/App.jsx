import React, { Component } from 'react';
import Home from './components/Home';
import MyContext from './contexts/MyContext';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };

    this.setName = this.setName.bind(this);
  }

  setName({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      state: { name },
      setName,
    } = this;

    const contextValue = {
      name,
      setName,
    };
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <Home />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
