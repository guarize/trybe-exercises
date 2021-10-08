import React from 'react';
import LoginPassword from './LoginPassword';
class Forms extends React.Component {

  constructor() {
    super()

    this.state = {
      checkbox: false,
      files: '',
      login: '',
      password: '',
    }
  }

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
        <LoginPassword value={this.state} handleChange={this.handleChange} />
        <input onChange={this.handleChange} type="checkbox" name="checkbox" />
        <input onChange={this.handleChange} type="file" name="files" />
      </div>
    );
  }
}

export default Forms;
