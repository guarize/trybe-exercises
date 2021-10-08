import React from 'react';

class Name extends React.Component {
  render() {
    const { handleChange } = this.props

    return <label htmlFor="name">
      <input onChange={ handleChange } type="text" name="name" id="name" />
    </label>;
  }
}

export default Name;
