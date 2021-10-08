import './App.css';
import React from 'react';
import Name from './components/Name';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <fieldset>
          <Name handleChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

export default App;
