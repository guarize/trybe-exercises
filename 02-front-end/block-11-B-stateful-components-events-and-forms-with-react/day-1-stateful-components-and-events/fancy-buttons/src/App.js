import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstBtnClicks: 0,
      secondBtnClicks: 0,
      thirdBtnClicks: 0,
    };
  }

  handleFirstBtn = () => {
    this.setState((previousState, _props) => ({
      firstBtnClicks: previousState.firstBtnClicks + 1,
    }));
  };

  handleSecondBtn = () => {
    this.setState((previousState, _props) => ({
      secondBtnClicks: previousState.secondBtnClicks + 1,
    }));
  };

  handleThirdBtn = () => {
    this.setState((previousState, _props) => ({
      thirdBtnClicks: previousState.thirdBtnClicks + 1,
    }));
  };

  render() {
    return (
      <div className='App'>
        <div>
          <button
            onClick={this.handleFirstBtn}
            className='Buttons first-button'
          >
            {this.state.firstBtnClicks}
          </button>
          <button
            onClick={this.handleSecondBtn}
            className='Buttons second-button'
          >
            {this.state.secondBtnClicks}
          </button>
          <button
            onClick={this.handleThirdBtn}
            className='Buttons third-button'
          >
            {this.state.thirdBtnClicks}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
