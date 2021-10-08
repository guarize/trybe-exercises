import React from 'react';

class LoginPassword extends React.Component {
  render() {
    const { value: { login, password }, handleChange } = this.props;
    return (
      <fieldset>
        <input
          onChange={handleChange}
          className="form-group"
          value={ login }
          type="text"
          name="login"
        />
        <input
          onChange={handleChange}
          className="form-group"
          value={ password }
          type="password"
          name="password"
        />
      </fieldset>
    );
  }
}

export default LoginPassword;
