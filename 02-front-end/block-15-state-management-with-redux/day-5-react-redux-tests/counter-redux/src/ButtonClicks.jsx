import React, { Component } from 'react';
import addClick from './actions';
import { connect } from 'react-redux';

class ButtonClicks extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.add}>Add</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick()),
});

export default connect(null, mapDispatchToProps)(ButtonClicks);
