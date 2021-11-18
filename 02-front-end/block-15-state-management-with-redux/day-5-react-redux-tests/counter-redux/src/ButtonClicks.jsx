import React, { Component } from 'react';
import { addClick, subClick } from './actions';
import { connect } from 'react-redux';

class ButtonClicks extends Component {
  render() {
    return (
      <div className="button-container">
        <button onClick={this.props.add}>Add</button>
        <button onClick={this.props.sub}>Sub</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick()),
  sub: () => dispatch(subClick()),
});

export default connect(null, mapDispatchToProps)(ButtonClicks);
