import React from 'react';

class Forms extends React.Component {
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="forms">
        <fieldset>
          <input
            onChange={this.handleChange}
            className="form-group"
            type="text"
            name="login"
          />
          <input
            onChange={this.handleChange}
            className="form-group"
            type="password"
            name="password"
          />
        </fieldset>
        <input onChange={this.handleChange} type="checkbox" name="checkbox" />
        <input onChange={this.handleChange} type="file" name="files" />
      </div>
    );
  }
}

export default Forms;
