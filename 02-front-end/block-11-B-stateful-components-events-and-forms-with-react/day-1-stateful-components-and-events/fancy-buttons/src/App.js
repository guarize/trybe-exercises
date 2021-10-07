import React from 'react';
import './App.css';


class App extends React.Component {

  handleFirstBtn = () => {
    console.log("First!");
  }
  
  handleSecondBtn = () => {
    console.log("Second!");
  }
  
  handleThirdBtn = () => {
    console.log("Third!");
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.handleFirstBtn} className="Buttons first-button">First</button>
          <button onClick={this.handleSecondBtn} className="Buttons second-button">Second</button>
          <button onClick={this.handleThirdBtn} className="Buttons third-button">Third</button>
        </div>
      </div>
    );
  }
}

export default App;
