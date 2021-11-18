import React from 'react';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonClicks />
        <NumberClicks />
      </div>
    );
  }
}

export default App;
