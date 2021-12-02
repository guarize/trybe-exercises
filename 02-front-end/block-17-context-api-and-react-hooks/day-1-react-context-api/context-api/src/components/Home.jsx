import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';

export default class Home extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => (
          <div>
            <p>{value.name}</p>
            <input type="text" name="name" onChange={value.setName} />
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
