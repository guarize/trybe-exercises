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

  buttonColorChanger = (num) => num % 2 === 0 ? 'green' : 'red';

  render() {

    const { firstBtnClicks, secondBtnClicks, thirdBtnClicks } = this.state;

    return (
      <div className='App'>
        <div>
          <button
            onClick={ this.handleFirstBtn }
            className='Buttons'
            style={{backgroundColor: this.buttonColorChanger(firstBtnClicks) }}
          >
            First | { firstBtnClicks }
          </button>
          <button
            onClick={ this.handleSecondBtn }
            className='Buttons'
            style={{backgroundColor: this.buttonColorChanger(secondBtnClicks) }}
          >
            Second | { secondBtnClicks }
          </button>
          <button
            onClick={this.handleThirdBtn}
            className='Buttons'
            style={{backgroundColor: this.buttonColorChanger(thirdBtnClicks) }}
          >
            Third | { thirdBtnClicks }
          </button>
        </div>
      </div>
    );
  }
}

export default App;
