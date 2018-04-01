import React from 'react';
import axios from 'axios';

class UserForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    grant: 'user' // For now it will be just user.
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    /** {TODO} Implement a Provider to store the user */
    axios.post('users', { ...this.state })
      .then((response) => {
        this.props.history.push('/users');
        console.log(response);
      });
  }

  onChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="in-content">
        <h2>Add a user</h2>
        <form onSubmit={ this.handleSubmit }>

          <div className="form-field">
            <label htmlFor="name">Full name</label><br/>
            <input type="text" name="name" id="name" required placeholder="Roger Testerson"
              value={ this.state.name } onChange={ this.onChange } />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label><br/>
            <input type="text" name="email" id="email" required placeholder="me@cloud.com"
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
              value={ this.state.email } onChange={ this.onChange } />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label><br/>
            <input type="password" name="password" id="password" required
              minLength="6" value={ this.state.password } onChange={ this.onChange } />
          </div>

          <button type="submit" className="button">Send</button>
        </form>
      </section>
    );
  }
};

export default UserForm;