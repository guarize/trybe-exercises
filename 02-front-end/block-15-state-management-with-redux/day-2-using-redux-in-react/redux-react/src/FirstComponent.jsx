import React from 'react';
import { connect } from 'react-redux';

class FirstComponent extends React.Component {
  render() {
    const { myFirstState } = this.props;
    return (
      <div>
        <div>
          {this.props.myFirstState.map((element, index) => (
            <p key={index}>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myFirstState: state.myReducer.state,
});

export default connect(mapStateToProps, null)(FirstComponent);
